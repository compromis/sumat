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
    <div v-if="value === '314'" class="youth-advisor">
      <div class="youth-advisor-card">
        <b-icon-exclamation-circle font-scale="1.2" class="mr-2" />
        <p>
          Emplenant aquest formulari et sumes <strong>únicament a Joves PV</strong>. Si vols formar part de <strong>Joves PV i Compromís</strong> (i tens més de 18 anys), et recomanem
          <nuxt-link to="/mes">
            sumar-te a Més - Compromís
          </nuxt-link>
        </p>
      </div>
    </div>
    <div v-if="value === '384'" class="youth-advisor">
      <div class="youth-advisor-card">
        <b-icon-exclamation-circle font-scale="1.2" class="mr-2" />
        <p>
          Emplenant aquest formulari et sumes <strong>únicament a Som Joves Compromís</strong>. Si vols formar part de <strong>Som i Compromís</strong> (i tens més de 18 anys), et recomanem
          <nuxt-link to="/iniciativa">
            sumar-te a Iniciativa
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconExclamationCircle } from 'bootstrap-vue'
import InputRadioButton from '~/components/ui/InputRadioButton'
import CompromisLogo from '~/components/logos/CompromisLogo'
import MesLogo from '~/components/logos/MesLogo'
import IniciativaLogo from '~/components/logos/IniciativaLogo'
import VerdsLogo from '~/components/logos/VerdsLogo'
import JovespvLogo from '~/components/logos/JovespvLogo'
import SomLogo from '~/components/logos/SomLogo'

export default {
  components: {
    InputRadioButton,
    BIconExclamationCircle
  },

  props: {
    value: {
      type: String,
      default: '14'
    },

    youth: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      seniorParties: [
        {
          id: '14',
          name: 'Compromís',
          logo: CompromisLogo
        },
        {
          id: '2',
          name: 'Mes',
          logo: MesLogo,
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
      youthParties: [
        {
          id: '314',
          name: 'Joves PV-Compromís',
          logo: JovespvLogo
        },
        {
          id: '384',
          name: 'Som Joves Compromís',
          logo: SomLogo
        }
      ],
      hideIfUnchecked: true
    }
  },

  computed: {
    parties () {
      return this.youth ? this.youthParties : this.seniorParties
    }
  },

  methods: {
    handlePartyChange (e) {
      const { partySlugs, form } = this.$store.state
      const simpatitzant = form.u_type === '2' ? 'simpatitzant' : ''
      history.replaceState({}, null, this.localePath(partySlugs[e.target.value] + simpatitzant))
      this.hideIfUnchecked = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../sass/variables';

  .youth-advisor {
    margin: 1.5rem 1rem -1rem 1rem;
    flex-grow: 1;
    width: 100%;

    &-card {
      display: flex;
      max-width: 70ch;
      background: $white;
      padding: 1rem;
      border-radius: .75rem;
      border: 1px $gray-300 solid;

      p {
        margin: 0;
        font-size: .85rem;
      }

      svg {
        margin-top: .15rem;
      }
    }
  }
</style>
