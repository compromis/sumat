<template>
  <div>
    <p>
      L'e-mail i el mòbil són camps requerits si vols donar-te d'alta a través d'internet.
      No obstant, pots donar-te d'alta sense e-mail o mòbil imprimint el
      <a :href="printableFormUrl"><b-icon-cloud-download /> {{ formName }}</a>
      i enviant-lo signat a la següent adreça:
    </p>
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
        2: 'https://comprom.is/formbloc',
        3: 'https://comprom.is/forminiciativa',
        4: 'https://comprom.is/formverds',
        14: 'https://comprom.is/form'
      }
      return urls[form.u_party]
    },

    formName () {
      const { form } = this.$store.state
      const names = {
        2: "formulari d'afiliació del BLOC",
        3: "formulari d'afiliaició d'Iniciativa",
        4: "formulari d'afiliació de VerdsEquo",
        14: "formulari d'adhesió a Compromís"
      }
      return names[form.u_party]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
}
</style>
