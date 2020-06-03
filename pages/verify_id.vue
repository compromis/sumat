<template>
  <div>
    <file-upload name="verify_id_front" label="DNI Front" @change="(file) => verify_id_front = file" />
    <file-upload name="verify_id_back" label="DNI Back" @change="(file) => verify_id_back = file" />
  </div>
</template>

<script>
import FileUpload from '~/components/ui/FileUpload'

export default {
  components: {
    FileUpload
  },

  data () {
    return {
      verify_id_front: '',
      verify_id_back: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
