<template>
  <div class="row party" @input.capture="(e) => handlePartyChange(e)">
    <div v-for="party in parties" :key="party.id" class="col-md-3 d-flex">
      <input-radio-button
        name="u_party"
        :value="party.id"
        :label="party.name"
        :logo="party.logo"
        :checked="value === party.id"
        :hidden-if-unchecked="hideIfUnchecked"
        @input="(value) => $emit('input', value)"
      />
    </div>
    <div class="d-md-none col">
      <button type="button" class="btn-link-muted btn-sm" @click="hideIfUnchecked = !hideIfUnchecked">
        {{ hideIfUnchecked ? 'Mostra més partits' : 'Amaga els partits' }}
      </button>
    </div>
  </div>
</template>

<script>
import InputRadioButton from '~/components/ui/InputRadioButton'
import CompromisLogo from '~/components/logos/CompromisLogo'

export default {
  components: {
    InputRadioButton
  },

  props: {
    value: {
      type: String,
      default: '14'
    }
  },

  data () {
    return {
      parties: [
        {
          id: '14',
          name: 'Compromís',
          logo: CompromisLogo
        },
        {
          id: '2',
          name: 'BLOC',
          logo: null
        },
        {
          id: '3',
          name: 'Iniciativa',
          logo: null
        },
        {
          id: '4',
          name: 'Verds',
          logo: null
        }
      ],
      hideIfUnchecked: true
    }
  },

  methods: {
    handlePartyChange (e) {
      const parties = this.$store.state.partySlugs
      const simpatitzant = this.$store.state.form.u_type === '2' ? 'simpatitzant' : ''
      history.replaceState({}, null, parties[e.target.value] + simpatitzant)
      this.hideIfUnchecked = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

@include media-breakpoint-down(sm) {
  .field {
    color: red;
  }
}
</style>
