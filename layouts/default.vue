<template>
  <div :class="`partit-${party}`">
    <app-nav />
    <global-errors />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppNav from '~/components/layout/AppNav'
import AppFooter from '~/components/layout/AppFooter'
import GlobalErrors from '~/components/ui/GlobalErrors'

export default {
  components: {
    AppNav,
    AppFooter,
    GlobalErrors
  },
  computed: {
    party () {
      return this.$store.state.form.u_party
    }
  },
  head () {
    return this.$nuxtI18nSeo()
  }
}
</script>
