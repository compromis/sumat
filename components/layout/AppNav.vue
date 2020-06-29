<template>
  <nav class="nav">
    <div class="container d-flex">
      <a href="https://compromis.net" class="logo" aria-label="Compromís">
        <compromis-logo />
      </a>
      <div class="site-title">
        {{ $t('nav.title') }}
      </div>
      <div class="ml-auto align-items-center d-flex">
        <span class="sr-only">Idioma</span>
        <nuxt-link
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="['btn-link-muted ml-2', { 'selected d-none d-md-inline': $i18n.locale === locale.code }]"
        >
          {{ locale.name }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import CompromisLogo from '~/components/logos/CompromisLogo'

export default {
  components: {
    CompromisLogo
  },

  watch: {
    '$i18n.locale' (newLocale) {
      const codes = { val: 'CA', cas: 'ES' }
      this.$store.commit('updateFormField', { name: 'u_lang', value: codes[newLocale] })
    }
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
    background: var(--nav-background);
    backdrop-filter: blur(10px);
    padding: .75rem 0;
    z-index: 1000;
    border-bottom: 1px var(--gray-100) solid;

    .logo {
      display: block;
      transition: .15s ease-in-out;
      color: $text-default;

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

  .selected {
    font-weight: bold;
    color: var(--gray-900);
  }

  @include media-breakpoint-down (sm) {
    .logo {
      width: 2rem;
      overflow: hidden;
    }
  }
</style>
