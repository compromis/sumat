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
        {{ hideIfUnchecked ? $t('party.show') : $t('party.hide') }}
      </button>
    </div>
  </div>
</template>

<script>
import InputRadioButton from '~/components/ui/InputRadioButton'
import CompromisLogo from '~/components/logos/CompromisLogo'
import BlocLogo from '~/components/logos/BlocLogo'
import IniciativaLogo from '~/components/logos/IniciativaLogo'
import VerdsLogo from '~/components/logos/VerdsLogo'

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
          logo: BlocLogo,
          logoStyle: { maxWidth: '120px' }
        },
        {
          id: '3',
          name: 'Iniciativa',
          logo: IniciativaLogo
        },
        {
          id: '4',
          name: 'Verds',
          logo: VerdsLogo
        }
      ],
      hideIfUnchecked: true
    }
  },

  methods: {
    handlePartyChange (e) {
      const parties = this.$store.state.partySlugs
      const simpatitzant = this.$store.state.form.u_type === '2' ? 'simpatitzant' : ''
      history.replaceState({}, null, this.localePath(parties[e.target.value] + simpatitzant))
      this.hideIfUnchecked = true
    }
  }
}
</script>
