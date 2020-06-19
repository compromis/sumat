<template>
  <nav class="nav">
    <div class="container d-flex">
      <a href="https://compromis.net" class="logo" aria-label="Compromís">
        <compromis-logo />
      </a>
      <div class="site-title">
        Formulari d’adhesió
      </div>
      <div class="ml-auto align-items-center d-none d-md-flex">
        <a href="https://compromis.net/espai" class="btn-link-muted d-inline">Inicia sessió</a>
      </div>
    </div>
  </nav>
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

    .logo {
      display: block;
      transition: .15s ease-in-out;

      svg {
        height: 1.75rem;
      }
    }

    .site-title {
      color: $text-muted;
      font-size: 1.2rem;
      padding-left: .5rem;
      letter-spacing: -.02em;
    }
  }

  @include media-breakpoint-down (sm) {
    .logo {
      width: 2rem;
      overflow: hidden;
    }
  }
</style>
