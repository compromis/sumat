<template>
  <div class="container verify-sms">
    <form-steps :current-step="2" />
    <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
      <form-section title="T’hem enviat un codi de signatura digital al 600 000 000">
        <input-sms name="sms_code" @code-updated="codeUpdated" />
      </form-section>
      <submit-button :submitting="submitting">
        Signa el formulari
      </submit-button>
    </form>
    <a href="#">No he rebut cap codi</a>
  </div>
</template>

<script>
import FormSection from '~/components/ui/FormSection'
import InputSms from '~/components/ui/InputSms'
import SubmitButton from '~/components/ui/SubmitButton'
import FormSteps from '~/components/blocks/FormSteps'

export default {
  components: {
    SubmitButton,
    FormSteps,
    InputSms,
    FormSection
  },

  middleware ({ store, redirect }) {
    if (!store.state.step !== 3) {
      // return redirect('/')
    }
  },

  data () {
    return {
      sms_code: '',
      submitting: false
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
    }
  },

  methods: {
    submit () {
      this.submitting = true
      this.$api.verifySms(this.$store.state.form)
        .then((resp) => {
          this.$store.commit('incrementStep')
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
    codeUpdated (newCode) {
      this.sms_code = newCode
      if (newCode.length === 6) {
        this.submit()
      }
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
</style>
