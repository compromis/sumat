<template>
  <div>
    <div class="text-muted my-4 text-center">
      <b-icon-lock class="icon" />
      {{ $t('notice.ssl') }}
    </div>
    <i18n class="legal text-muted my-4" path="notice.privacy" tag="p">
      <strong>Compromís</strong>
      <strong>{{ $t('notice.law') }}</strong>
      <strong>{{ $t('notice.law_name') }}</strong>
      <a href="mailto:dades@compromis.net">dades@compromis.net</a>
      <a href="https://compromis.net/avis-legal" target="_blank">{{ $t('notice.privacy_link') }}</a>
    </i18n>
  </div>
</template>

<script>
import { BIconLock } from 'bootstrap-vue'

export default {
  components: {
    BIconLock
  }
}
</script>

<style lang="scss" scoped>
  .legal {
    font-size: .75rem;
    line-height: 1.25;
  }

  .icon {
    position: relative;
    top: -3px;
  }
</style>
