<template>
  <index />
</template>

<script>
import Index from './index'
export default {
  components: {
    Index
  },

  asyncData ({ store }) {
    store.commit('setParty', '3')
  }
}
</script>

<style lang="scss" scoped>

</style>
