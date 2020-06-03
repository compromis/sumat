<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      type="file"
      :name="name"
      :accept="accept"
      :required="required"
      @change="onFileChange"
    >
  </div>
</template>

<script>
export default {
  name: 'FileUpload',

  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      default: 'image/*,application/pdf'
    },
    required: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      selectedFile: null,
      uploadedFile: null,
      errors: [],
      isSaving: false
    }
  },

  methods: {
    onFileChange () {
      this.errors = []
      this.selectedFile = event.target.files[0]
      this.isSaving = true

      const formData = new FormData()
      formData.append('file', this.selectedFile)

      this.$uploadFile('id_validation', formData)
        .then((response) => {
          this.uploadedFile = response.file
          this.$emit('change', response.file)
        }).catch((errors) => {
          this.errors = errors
        }).then(() => {
          this.isSaving = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
