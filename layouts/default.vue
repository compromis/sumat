<template>
  <div :class="`partit-${party}`">
    <global-errors />
    <nuxt />
  </div>
</template>

<script>
import GlobalErrors from '~/components/ui/GlobalErrors'

export default {
  components: {
    GlobalErrors
  },
  computed: {
    party () {
      return this.$store.state.form.u_party
    }
  }
}
</script>
