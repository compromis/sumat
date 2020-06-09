<template>
  <div>
    Success!
  </div>
</template>

<script>
export default {
  middleware ({ store, redirect }) {
    if (![3, 5].includes(store.state.step)) {
      // return redirect('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
