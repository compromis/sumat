<template>
  <div>
    <file-upload name="verify_id_front" label="DNI Front" @change="(file) => verify_id.front = file" />
    <file-upload name="verify_id_back" label="DNI Back" @change="(file) => verify_id.back = file" />
  </div>
</template>

<script>
import FileUpload from '~/components/ui/FileUpload'

export default {
  components: {
    FileUpload
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
      }
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
