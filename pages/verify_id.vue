<template>
  <main>
    <div class="container verify-id">
      <form-steps :current-step="1" />
      <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
        <form-section title="Adjunta el teu DNI / NIE">
          <field-group>
            <input-file
              name="verify_id_front"
              label="Anvers"
              :invalid="'verify_id_front' in errors"
              :invalid-message="errors['verify_id_front']"
              required
              class="c-span-2"
              @change="(file) => verify_id.front = file"
            />
            <input-file
              name="verify_id_back"
              label="Revers"
              :invalid="'verify_id_back' in errors"
              :invalid-message="errors['verify_id_back']"
              required
              class="c-span-2"
              @change="(file) => verify_id.back = file"
            />
          </field-group>
        </form-section>
        <submit-button :submitting="submitting">
          Adjunta fitxers
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

  middleware ({ store, redirect }) {
    if (!store.state.step !== 2) {
      return redirect('/')
    }
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

  methods: {
    updateId (pics) {
      this.$store.commit('updateId', pics)
    },

    submit () {
      this.submitting = true
      this.$store.commit('clearErrors')

      this.$api.requestSms(this.$store.state.form)
        .then((resp) => {
          this.$store.commit('incrementStep')
          this.$store.commit('updateFormField', { name: 'sms_ref', value: resp.sms_ref })
          this.$router.push({ name: 'verify_sms' })
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
