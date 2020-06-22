<template>
  <main>
    <div class="container verify-sms">
      <form-steps :current-step="2" />
      <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
        <div v-if="hasRetried" class="alert alert-success">
          T'hem enviat un nou codi.
        </div>
        <form-section :title="'T’hem enviat un codi de signatura digital al ' + $store.state.form.u_mobile">
          <!-- Input method for desktop -->
          <input-sms
            :invalid="'sms_code' in errors || 'sms_ref' in errors"
            :invalid-message="errors['sms_code'] ? errors['sms_code'] : errors['sms_ref']"
            class="mt-4 d-none d-md-block"
            required
            @code-updated="codeUpdated"
          />
          <!-- Input for small screens -->
          <field-group class="d-md-none mt-2">
            <input-field
              v-model="sms_code"
              name="sms_code"
              label="Codi SMS"
              class="c-span-4"
              pattern="[0-9]*"
              autocomplete="one-time-code"
              required
              :invalid="'sms_code' in errors || 'sms_ref' in errors"
              :invalid-message="errors['sms_code'] ? errors['sms_code'] : errors['sms_ref']"
              maxlength="6"
            />
          </field-group>
        </form-section>
        <submit-button :submitting="submitting">
          Signa el formulari
        </submit-button>
      </form>
      <button
        v-tooltip="!canRetry ? {
          trigger: 'hover click focus',
          content: 'Podràs demanar un nou codi si no reps cap SMS en un minut'
        } : false"
        :class="['btn-link-muted', { 'disabled': !canRetry }]"
        type="button"
        @click="retry"
      >
        No he rebut cap codi
      </button>
      <nuxt-link to="/" class="btn-link-muted mt-2">
        Modificar mòbil
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import FormSection from '~/components/ui/FormSection'
import FieldGroup from '~/components/ui/FieldGroup'
import InputSms from '~/components/ui/InputSms'
import InputField from '~/components/ui/InputField'
import SubmitButton from '~/components/ui/SubmitButton'
import FormSteps from '~/components/blocks/FormSteps'

export default {
  components: {
    SubmitButton,
    FormSteps,
    InputSms,
    InputField,
    FormSection,
    FieldGroup
  },

  middleware ({ store, redirect }) {
    if (store.state.step !== 'verify_sms') {
      return redirect('/')
    }
  },

  data () {
    return {
      sms_code: '',
      submitting: false,
      canRetry: false,
      hasRetried: false
    }
  },

  computed: {
    errors () {
      return this.$store.state.errors
    }
  },

  watch: {
    sms_code (value) {
      this.$store.commit('updateFormField', { name: 'sms_code', value })
      if (value.length === 6) {
        this.submit()
      }
    }
  },

  mounted () {
    setTimeout(() => { this.canRetry = true }, 60000)
  },

  methods: {
    submit () {
      this.submitting = true
      this.$store.commit('clearErrors')

      this.$api.verifySms(this.$store.state.form)
        .then((resp) => {
          const { number, token } = resp.result
          this.$store.commit('setCredentials', { number, token })
          this.$store.commit('setStep', 'additional_info')
          this.$router.push({ name: 'additional_info' })
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
    },

    retry () {
      if (!this.canRetry) { return }
      this.submitting = true
      this.$store.commit('clearErrors')

      this.$api.requestSms(this.$store.state.form)
        .then((resp) => {
          this.canRetry = false
          this.hasRetried = true
          this.$store.commit('updateFormField', { name: 'sms_ref', value: resp.sms_ref })
          setTimeout(() => { this.canRetry = true }, 60000)
        }).catch((resp) => {
          this.$store.commit('setErrors', resp.errors)
        }).then(() => {
          this.submitting = false
        })
    },

    codeUpdated (newCode) {
      this.sms_code = newCode
    }
  }
}
</script>

<style lang="scss" scoped>
  .verify-sms {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .disabled {
    opacity: .5;
  }
</style>
