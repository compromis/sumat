<template>
  <div class="row types" @input.capture="(e) => handleTypeChange(e)">
    <div class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="1"
        :label="party === '14' ? $t('type.joined') : $t('type.affiliate')"
        :checked="value === '1'"
        @input="(value) => $emit('input', value)"
      >
        <div v-if="party === '2'">
          {{ $t('type.rights.bloc') }} <a href="https://comprom.is/estatutsbloc" target="_blank">bases del Bloc</a>.
        </div>
        <div v-else-if="party === '3'">
          {{ $t('type.rights.iniciativa') }} <a href="https://comprom.is/estatutsiniciativa" target="_blank">bases d'Iniciativa</a>.
        </div>
        <div v-else-if="party === '4'">
          {{ $t('type.rights.verds') }} <a href="https://comprom.is/estatutsverds" target="_blank">bases de VerdsEQuo</a>.
        </div>
        <div v-else>
          {{ $t('type.rights.compromis') }} <a href="https://comprom.is/estatuts" target="_blank">bases de Compromís</a>.
        </div>
      </input-radio-button>
    </div>
    <div class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="2"
        :label="$t('type.sympathizer')"
        :checked="value === '2'"
        @input="(value) => $emit('input', value)"
      >
        <div v-if="party === '2'">
          {{ $t('type.sympathizers.bloc') }}
        </div>
        <div v-else-if="party === '3'">
          {{ $t('type.sympathizers.iniciativa') }}
        </div>
        <div v-else-if="party === '4'">
          {{ $t('type.sympathizers.verds') }}
        </div>
        <div v-else>
          {{ $t('type.sympathizers.compromis') }}
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
      const lang = this.$i18n.locale === 'cas' ? '/cas' : ''
      history.replaceState({}, null, lang + parties[party] + simpatitzant)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
