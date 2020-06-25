<template>
  <div class="row types" @input.capture="(e) => handleTypeChange(e)">
    <div class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="1"
        :label="party === '14' ? $t('type.member') : $t('type.affiliate')"
        :checked="value === '1'"
        @input="(value) => $emit('input', value)"
      >
        <i18n :path="`type.rights.${party}`" tag="div">
          <a :href="bylawsUrl" target="_blank">{{ $t(`type.bylaws.${party}`) }}</a>
        </i18n>
      </input-radio-button>
    </div>
    <div class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="2"
        :label="$t('type.supporter')"
        :checked="value === '2'"
        @input="(value) => $emit('input', value)"
      >
        <div>
          {{ $t(`type.supporters.${party}`) }}
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
    },

    bylawsUrl () {
      const urls = {
        2: 'https://comprom.is/estatutsbloc',
        3: 'https://comprom.is/estatutsiniciativa',
        4: 'https://comprom.is/estatutsverds',
        14: 'https://comprom.is/estatuts'
      }

      return urls[this.party]
    }
  },

  methods: {
    handleTypeChange (e) {
      const { partySlugs, form } = this.$store.state
      const simpatitzant = e.target.value === '2' ? 'simpatitzant' : ''
      history.replaceState({}, null, this.localePath(partySlugs[form.u_party] + simpatitzant))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
