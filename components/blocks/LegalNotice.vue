<template>
  <div>
    <div class="text-muted my-4 text-center">
      <b-icon-lock class="icon" />
      Les teues dades s'enviaran de forma segura a través d'una connexió xifrada SSL
    </div>
    <p class="legal text-muted my-4">
      <strong>Compromís</strong> en compliment del que estableix la Llei Orgànica 3/2018,
      de 5 de desembre, de Protecció de Dades Personals i Drets Digitals, li informem que les dades
      personals que va a proporcionar-nos seran incorporades a un fitxer automatitzat de Compromís,
      que com a responsable del fitxer, tractarà els mateixos a fi de tramitar la seua afiliació,
      permetre l'exercici dels drets i deures, gestionar la seua participació i oferir-li informació
      sobre les nostres activitats, ja siga per correu ordinari, electrònic, SMS o un altre mitjà de
      comunicació equivalent. Així mateix, li informem que podrà exercir els drets que li assisteixen d'accés,
      rectificació, cancel·lació i oposició al tractament de la informació que li concerneix a través del
      seu usuari de l'Espai Compromís o dirigint un escrit bé per correu postal a Compromís (Plaça del
      Pilar, 1 - 46001 València) o bé per mitjà d'un correu electrònic a
      <a href="mailto:dades@compromis.net">dades@compromis.net</a>, acompanyant una fotocòpia del document
      que acredite la seua identitat. Més informació en
      <a href="https://compromis.net/avis-legal" target="_blank">Avís legal i política de privacitat</a>.
    </p>
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
