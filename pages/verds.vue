<template>
  <index />
</template>

<script>
import Index from './index'
export default {
  components: {
    Index
  },

  async fetch ({ store, params }) {
    await store.dispatch('getInfo')
  },

  asyncData ({ store }) {
    store.commit('setParty', '4')
  }
}
</script>

<style lang="scss" scoped>

</style>
