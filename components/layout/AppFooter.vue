<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <strong>Compromís</strong> -
          <address>Plaça del Pilar, 1 - 46001 València</address> -
          <span>96 382 66 06</span> -
          <a href="mailto:info@compromis.net" class="btn-link-muted">info@compromis.net</a>
        </div>
        <div class="col-md-5 text-right mt-4 mt-md-0">
          <b-icon-question-circle />
          Necessites ajuda? Contacta amb <a href="mailto:web@compromis.net" class="btn-link-muted">web@compromis.net</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { BIconQuestionCircle } from 'bootstrap-vue'

export default {
  components: {
    BIconQuestionCircle
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  footer {
    font-size: .85rem;
    color: $text-muted;
  }

  .container {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px var(--gray-300) solid;
  }

  address {
    display: inline;
  }
</style>
