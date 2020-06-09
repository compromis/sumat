<template>
  <div>
    <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
      <file-upload
        name="verify_id_front"
        label="DNI Front"
        :invalid="'verify_id_front' in errors"
        :invalid-message="errors['verify_id_front']"
        required
        @change="(file) => verify_id.front = file"
      />
      <file-upload
        name="verify_id_back"
        label="DNI Back"
        :invalid="'verify_id_front' in errors"
        :invalid-message="errors['verify_id_front']"
        required
        @change="(file) => verify_id.back = file"
      />
      <submit-button :submitting="submitting">
        Adjunta DNI/NIE
      </submit-button>
    </form>
  </div>
</template>

<script>
import FileUpload from '~/components/ui/FileUpload'
import SubmitButton from '~/components/ui/SubmitButton'

export default {
  components: {
    FileUpload,
    SubmitButton
  },

  middleware ({ store, redirect }) {
    if (!store.state.step !== 2) {
      // return redirect('/')
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

</style>
