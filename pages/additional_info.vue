<template>
  <div>
    <form-steps :current-step="3" />
    <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
      <input-field
        v-model="form.u_studies"
        name="u_studies"
        label="Estudis"
      />
      <submit-button :submitting="submitting">
        Adjunta informació
      </submit-button>
      <button @click="skip">
        Skip
      </button>
    </form>
  </div>
</template>

<script>
import InputField from '~/components/ui/InputField'
import SubmitButton from '~/components/ui/SubmitButton'
import FormSteps from '~/components/blocks/FormSteps'

export default {
  components: {
    InputField,
    SubmitButton,
    FormSteps
  },

  middleware ({ store, redirect }) {
    if (![2, 4].includes(store.state.step)) {
      // return redirect('/')
    }
  },

  data () {
    return {
      form: {
        u_studies: ''
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
    form: {
      handler (form) {
        this.$store.commit('updateAdditionalForm', form)
      },
      deep: true
    }
  },

  methods: {
    submit () {
      this.submitting = true
      this.$api.attachAdditionalInfo(this.$store.state.additional_form)
        .then((resp) => {
          this.$store.commit('incrementStep')
          this.$router.push({ name: 'success' })
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

    skip () {
      this.$store.commit('incrementStep')
      this.$router.push({ name: 'success' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
