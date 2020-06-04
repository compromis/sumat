<template>
  <div :class="`partit-${party}`">
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    party () {
      return this.$store.state.form.u_party
    }
  }
}
</script>
