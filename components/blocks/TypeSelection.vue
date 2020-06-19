<template>
  <div class="row types" @input.capture="(e) => handleTypeChange(e)">
    <div class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="1"
        :label="party === '14' ? 'Adherit/da' : 'Afiliat/da'"
        :checked="value === '1'"
        @input="(value) => $emit('input', value)"
      >
        <div v-if="party === '2'">
          Com a adherit/da tindràs tots els drets i deures recollits en les <a href="https://comprom.is/estatutsbloc" target="_blank">bases del BLOC</a>.
        </div>
        <div v-else-if="party === '3'">
          Com a adherit/da tindràs tots els drets i deures recollits en les <a href="https://comprom.is/estatutsiniciativa" target="_blank">bases d'Iniciativa</a>.
        </div>
        <div v-else-if="party === '4'">
          Com a adherit/da tindràs tots els drets i deures recollits en les <a href="https://comprom.is/estatutsverds" target="_blank">bases dels Verds</a>.
        </div>
        <div v-else>
          Com a adherit/da tindràs tots els drets i deures recollits en les <a href="https://comprom.is/estatuts" target="_blank">bases de Compromís</a>.
        </div>
      </input-radio-button>
    </div>
    <div class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="2"
        label="Simpatitizant"
        :checked="value === '2'"
        @input="(value) => $emit('input', value)"
      >
        <div v-if="party === '2'">
          Si encara no t'has decidit afiliar-te al BLOC, pots participar com a simpatitzant.
        </div>
        <div v-else-if="party === '3'">
          Si encara no t'has decidit afiliar-te a Iniciativa, pots participar com a simpatitzant.
        </div>
        <div v-else-if="party === '4'">
          Si encara no t'has decidit afiliar-te als Verds, pots participar com a simpatitzant.
        </div>
        <div v-else>
          Si encara no t'has decidit adherir-te a Compromís, pots participar com a simpatitzant.
        </div>
      </input-radio-button>
    </div>
  </div>
</template>

<script>
import InputRadioButton from '~/components/ui/InputRadioButton'

export default {
  components: {
    InputRadioButton
  },

  props: {
    value: {
      type: String,
      default: '1'
    }
  },

  computed: {
    party () {
      return this.$store.state.form.u_party
    }
  },

  methods: {
    handleTypeChange (e) {
      const parties = this.$store.state.partySlugs
      const party = this.$store.state.form.u_party
      const simpatitzant = e.target.value === '2' ? 'simpatitzant' : ''
      history.replaceState({}, null, parties[party] + simpatitzant)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
