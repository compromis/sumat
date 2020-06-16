<template>
  <div class="hero">
    gràcies pel teu compromís
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
  @import '../sass/variables';

  .hero {
    background: $gradient;
    font-size: clamp(2rem, 4vw, 6rem);
    color: $white;
    text-align: center;
    padding: 4vw;
    font-weight: bold;
    letter-spacing: -.03em;
  }
</style>
