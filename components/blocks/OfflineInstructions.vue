<template>
  <div>
    <i18n path="offline.instructions" tag="p">
      <a :href="printableFormUrl"><b-icon-cloud-download /> {{ $t(`offline.forms.${$store.state.form.u_party}`) }}</a>
    </i18n>
    <p class="font-weight-bold">
      Compromís<br>
      Plaça del Pilar, 1<br>
      46001 València
    </p>
  </div>
</template>

<script>
import { BIconCloudDownload } from 'bootstrap-vue'

export default {
  components: {
    BIconCloudDownload
  },

  computed: {
    printableFormUrl () {
      const { form } = this.$store.state
      const urls = {
        2: 'https://comprom.is/formmes',
        3: 'https://comprom.is/forminiciativa',
        4: 'https://comprom.is/formverds',
        14: 'https://comprom.is/form',
        314: 'https://comprom.is/formjovespv',
        384: 'https://comprom.is/formsom'
      }
      return urls[form.u_party]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
}
</style>
