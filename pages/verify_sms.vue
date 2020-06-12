<template>
  <div>
    <form-steps :current-step="2" />
    <div>T’hem enviat un codi de signatura digital al 600 000 000</div>
    <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
      <input-sms name="sms_code" @code-updated="codeUpdated" />
      <submit-button :submitting="submitting">
        Signa el formulari
      </submit-button>
    </form>
    <div>No he rebut cap codi</div>
  </div>
</template>

<script>
import InputSms from '~/components/ui/InputSms'
import SubmitButton from '~/components/ui/SubmitButton'
import FormSteps from '~/components/blocks/FormSteps'

export default {
  components: {
    SubmitButton,
    FormSteps,
    InputSms
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

</style>
