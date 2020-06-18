<template>
  <div class="nav">
    <div class="container d-flex">
      <a href="https://compromis.net">
        <compromis-logo />
      </a>
      <div class="ml-auto d-flex align-items-center">
        <a href="https://compromis.net/espai" class="btn-link-muted d-none d-sm-inline">Inicia sessió</a>
      </div>
    </div>
  </div>
</template>

<script>
import CompromisLogo from '~/components/logos/CompromisLogo'

export default {
  components: {
    CompromisLogo
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba($white, .8);
    backdrop-filter: blur(10px);
    padding: .75rem;
    z-index: 1000;
    border-bottom: 1px var(--gray-100) solid;

    svg {
      height: 1.75rem;
    }
  }
</style>
