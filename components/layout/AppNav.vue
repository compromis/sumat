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
        <span class="sr-only">Idioma</span>
        <button :class="['btn-link-muted mr-2', { 'selected': $i18n.locale === 'val' }]" :aria-pressed="$i18n.locale === 'val'" @click="setLocale('val')">
          Valencià
        </button>
        <button :class="['btn-link-muted', { 'selected': $i18n.locale === 'cas' }]" :aria-pressed="$i18n.locale === 'cas'" @click="setLocale('cas')">
          Castellano
        </button>
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

  methods: {
    setLocale (locale) {
      const langs = { cas: 'es', val: 'ca' }
      this.$i18n.locale = locale
      this.$store.commit('updateFormField', { name: 'u_lang', value: langs[locale] })
      /* Redirect to new path */
      const name = (locale === 'val') ? this.$route.name.replace(/___cas/g, '___val') : this.$route.name.replace(/___val/g, '___cas')
      this.$router.push({ name })
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
