<template>
  <div :class="`partit-${party}`">
    <app-nav />
    <global-errors />
    <nuxt />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import GlobalErrors from '~/components/ui/GlobalErrors'

export default {
  components: {
    AppNav,
    GlobalErrors
  },
  computed: {
    party () {
      return this.$store.state.form.u_party
    }
  }
}
</script>
