<template>
  <div class="row types" @input.capture="(e) => handleTypeChange(e)">
    <div class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="1"
        :label="$t('type.member.' + party)"
        :checked="value === '1'"
        @input="(value) => $emit('input', value)"
      >
        <i18n :path="`type.rights.${party}`" tag="div">
          <a :href="bylawsUrl" target="_blank">{{ $t(`type.bylaws.${party}`) }}</a>
        </i18n>
      </input-radio-button>
    </div>
    <div v-if="party === '3'" class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="3"
        :label="$t('type.activist.' + party)"
        :checked="value === '3'"
        @input="(value) => $emit('input', value)"
      >
        <div>
          {{ $t(`type.activists.${party}`) }}
        </div>
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
    <div v-if="party === '2'" class="col-md-6 col-lg-4 d-flex">
      <input-radio-button
        name="u_type"
        value="3"
        :label="$t('type.activist.' + party)"
        :checked="value === '3'"
        @input="(value) => $emit('input', value)"
      >
        <div>
          {{ $t(`type.activists.${party}`) }}
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
        2: 'https://comprom.is/estatutsmes',
        3: 'https://comprom.is/estatutsiniciativa',
        4: 'https://comprom.is/estatutsverds',
        14: 'https://comprom.is/estatuts',
        314: 'https://comprom.is/estatutsjovespv'
      }

      return urls[this.party]
    }
  },

  methods: {
    handleTypeChange (e) {
      const { partySlugs, form } = this.$store.state
      const path = e.target.value === '2' ? 'simpatitzant' : e.target.value === '3' ? 'activista' : ''
      history.replaceState({}, null, this.localePath(partySlugs[form.u_party] + path))
    }
  }
}
</script>
