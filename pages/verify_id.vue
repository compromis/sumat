<template>
  <main>
    <div class="container verify-id">
      <form-steps :current-step="1" />
      <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
        <form-section :title="$t('verify_id.title')">
          <field-group>
            <input-file
              name="verify_id_front"
              :label="$t('verify_id.front')"
              :value="verify_id.front"
              :invalid="'verify_id_front' in errors"
              :invalid-message="errors['verify_id_front']"
              required
              class="c-span-2"
              @change="(file) => verify_id.front = file"
            />
            <input-file
              name="verify_id_back"
              :label="$t('verify_id.back')"
              :value="verify_id.back"
              :invalid="'verify_id_back' in errors"
              :invalid-message="errors['verify_id_back']"
              required
              class="c-span-2"
              @change="(file) => verify_id.back = file"
            />
          </field-group>
        </form-section>
        <submit-button :submitting="submitting">
          {{ $t('verify_id.submit') }}
        </submit-button>
      </form>
    </div>
  </main>
</template>

<script>
import FormSection from '~/components/ui/FormSection'
import FieldGroup from '~/components/ui/FieldGroup'
import InputFile from '~/components/ui/InputFile'
import SubmitButton from '~/components/ui/SubmitButton'
import FormSteps from '~/components/blocks/FormSteps'

export default {
  components: {
    FormSection,
    FieldGroup,
    InputFile,
    SubmitButton,
    FormSteps
  },

  data () {
    return {
      verify_id: {
        front: '',
        back: ''
      },
      submitting: false
    }
  },

  middleware ({ store, redirect, route }) {
    if (store.state.step !== 'verify_id' && !('override' in route.query)) {
      return redirect('/')
    }
  },

  computed: {
    errors () {
      return this.$store.state.errors
    }
  },

  watch: {
    verify_id: {
      handler (pics) {
        this.updateId(pics)
      },
      deep: true
    }
  },

  mounted () {
    const { form } = this.$store.state
    this.verify_id.front = form.verify_id_front
    this.verify_id.back = form.verify_id_back
  },

  methods: {
    updateId (pics) {
      this.$store.commit('updateId', pics)
    },

    submit () {
      this.submitting = true
      this.$store.commit('clearErrors')

      this.$api.requestSms(this.$store.state.form)
        .then((resp) => {
          this.$store.commit('setStep', 'verify_sms')
          this.$store.commit('updateFormField', { name: 'sms_ref', value: resp.sms_ref })
          this.$router.push({ name: 'verify_sms___' + this.$i18n.locale })
        }).catch((resp) => {
          this.$store.commit('setErrors', resp.errors)
          // Scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }).then(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .verify-id {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      width: 100%;
    }
  }
</style>
