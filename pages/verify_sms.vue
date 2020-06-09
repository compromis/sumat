<template>
  <div>
    <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
      <input-field
        v-model="sms_code"
        name="sms_code"
        label="Codi SMS"
        :invalid="'sms_code' in errors"
        :invalid-message="errors['sms_code']"
        required
      />
      <submit-button :submitting="submitting">
        Signa el formulari
      </submit-button>
    </form>
  </div>
</template>

<script>
import InputField from '~/components/ui/InputField'
import SubmitButton from '~/components/ui/SubmitButton'

export default {
  components: {
    InputField,
    SubmitButton
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
