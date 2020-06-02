<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$store.state.form.u_name
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
