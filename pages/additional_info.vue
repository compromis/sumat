<template>
  <div>
    <form @submit.prevent="submit">
      <input-field
        v-model="form.u_studies"
        name="u_studies"
        label="Estudis"
      />
      <button type="submit">
        Submit
      </button>
      <button @click="skip">
        Skip
      </button>
    </form>
  </div>
</template>

<script>
import InputField from '~/components/ui/InputField'

export default {
  components: {
    InputField
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
      }
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
      this.$attatchAdditionalInfo(this.$store.state.additional_form)
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
