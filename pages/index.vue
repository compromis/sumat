<template>
  <div class="container">
    <header class="hero">
      <h1>{{ $t('hero.title') }}</h1>
      <p>{{ $t("hero.leadin") }}</p>
    </header>

    <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
      <form-section id="party" :title="$t('party.title')" title-hidden>
        <party-selection v-model="form.u_party" />
      </form-section>

      <form-section id="type" :title="$t('type.title')" title-hidden>
        <type-selection v-model="form.u_type" />
      </form-section>

      <div ref="errorWarning" aria-live="polite" :tabindex="Object.keys($store.state.errors).length > 0 ? 0 : false">
        <div v-if="Object.keys($store.state.errors).length > 0" class="c-card error-warning" role="alert">
          {{ $t('errors') }}
        </div>
      </div>

      <form-section id="dades-personals" :title="$t('personal.title')">
        <field-group>
          <input-field
            v-model="form.u_name"
            :label="$t('personal.name')"
            name="u_name"
            class="c-span-2 corner-top-left md:corner-top-right"
            autocomplete="given-name"
            required
            :invalid="'u_name' in errors"
            :invalid-message="errors['u_name']"
          />
          <input-field
            v-model="form.u_surname"
            :label="$t('personal.surname')"
            name="u_surname"
            class="c-span-2 corner-top-right md:reset-corner"
            autocomplete="family-name"
            required
            :invalid="'u_surname' in errors"
            :invalid-message="errors['u_surname']"
          />
          <input-field
            v-model="form.u_DNI"
            label="DNI / NIE"
            name="u_DNI"
            :invalid="'u_DNI' in errors"
            :invalid-message="errors['u_DNI']"
            maxlength="9"
            required
          />
          <input-birthday
            name="u_birthday"
            :label="$t('personal.birthday')"
            :day="form.u_birthday_day"
            :month="form.u_birthday_month"
            :year="form.u_birthday_year"
            required
            :invalid="'u_birthday_day' in errors"
            :invalid-message="errors['u_birthday_day']"
            @day-updated="(day) => form.u_birthday_day = day"
            @month-updated="(month) => form.u_birthday_month = month"
            @year-updated="(year) => form.u_birthday_year = year"
          />
          <input-radio-group
            v-model="form.u_gender"
            :label="$t('personal.gender')"
            name="u_gender"
            :options="[
              { value: 'M', text: 'Home' },
              { value: 'F', text: 'Dona' },
              { value: 'A', text: 'Altre' }
            ]"
            class="c-span-2"
            required
            :invalid="'u_gender' in errors"
            :invalid-message="errors['u_gender']"
          />
          <input-field
            v-model="form.u_address"
            :label="$t('personal.address')"
            name="u_address"
            class="c-span-2 corner-bottom-left"
            autocomplete="street-address"
            required
            :invalid="'u_address' in errors"
            :invalid-message="errors['u_address']"
          />
          <input-field
            v-model="form.u_city"
            :label="$t('personal.city')"
            name="u_city"
            required
            :invalid="'u_city' in errors"
            :invalid-message="errors['u_city']"
          />
          <input-field
            v-model="form.u_postal"
            :label="$t('personal.postal')"
            name="u_postal"
            class="corner-bottom-right"
            autocomplete="postal-code"
            pattern="\d*"
            required
            :invalid="'u_postal' in errors"
            :invalid-message="errors['u_postal']"
          />
        </field-group>
      </form-section>

      <form-section id="contacte" :title="$t('contact.title')">
        <field-group>
          <input-field
            v-model="form.uacc_email"
            type="email"
            name="u_email"
            label="E-mail"
            class="c-span-2 corner-top-left md:corner-top-right"
            required
            :invalid="'uacc_email' in errors"
            :invalid-message="errors['uacc_email']"
          />
          <input-field
            v-model="form.uacc_email_twice"
            type="email"
            name="u_email_twice"
            :label="$t('contact.repeatemail')"
            class="c-span-2 corner-top-right md:reset-corner"
            required
            :invalid="'uacc_email_twice' in errors"
            :invalid-message="errors['uacc_email_twice']"
          />
          <input-tel
            class="c-span-2 corner-bottom-left md:reset-corner"
            name="u_mobile"
            :label="$t('contact.mobilephone')"
            required
            :invalid="'u_mobile' in errors"
            :invalid-message="errors['u_mobile']"
            :number="form.u_mobile"
            :prefix="form.u_mobile_prefix"
            @prefix-updated="(prefix) => form.u_mobile_prefix = prefix"
            @number-updated="(number) => form.u_mobile = number"
          />
          <input-tel
            class="c-span-2 corner-bottom-right md:corner-bottom-left"
            name="u_phone"
            :label="$t('contact.phone')"
            placeholder="960 000 000"
            :invalid="'u_phone' in errors"
            :invalid-message="errors['u_phone']"
            :number="form.u_phone"
            :prefix="form.u_phone_prefix"
            @prefix-updated="(prefix) => form.u_phone_prefix = prefix"
            @number-updated="(number) => form.u_phone = number"
          />
        </field-group>
        <template v-slot:additional-info>
          <button v-b-modal.no-email class="btn-link-muted" type="button">
            {{ $t('contact.stoneage') }}
          </button>
        </template>
      </form-section>

      <form-section id="collectiu" :title="$t('collectiu.title')" :help="$t('collectiu.help')">
        <field-group>
          <input-select
            v-model="form.collectiu"
            name="collectiu"
            :label="$t('collectiu.select')"
            :options="collectius"
            class="c-span-4"
            required
          />
        </field-group>
      </form-section>

      <transition name="slide">
        <form-section v-if="form.u_type === '1'" id="quota" :title="$t('fees.title')">
          <fee-selection v-model="form.u_fee" :fees="fees[form.u_party]" />
          <field-group>
            <input-field
              v-model="form.u_bank_name"
              type="text"
              name="u_bank_name"
              :label="$t('fees.name')"
              class="c-span-3 corner-top-left md:corner-top-right"
              required
              :invalid="'u_bank_name' in errors"
              :invalid-message="errors['u_bank_name']"
            />
            <input-field
              v-model="form.u_bank_DNI"
              type="text"
              name="u_bank_DNI"
              label="DNI / NIE"
              class="c-span-1-full corner-top-right md:reset-corner"
              required
              maxlength="9"
              :invalid="'u_bank_DNI' in errors"
              :invalid-message="errors['u_bank_DNI']"
            />
            <input-field
              v-model="form.u_bank_IBAN"
              type="text"
              name="u_bank_IBAN"
              label="IBAN"
              class="c-span-4 corner-bottom-left corner-bottom-right"
              required
              :invalid="'u_bank_IBAN' in errors"
              :invalid-message="errors['u_bank_IBAN']"
            />
          </field-group>
        </form-section>
      </transition>

      <div v-if="form.u_type === '1' && form.u_party !== '2'" ref="avals" role="region" tabindex="-1" :aria-label="$t('avals.avals')">
        <transition name="slide">
          <form-section
            v-if="showAvals"
            id="avals"
            :title="$t('avals.title')"
            class="mb-2"
          >
            <field-group>
              <input-field
                v-model="form.u_aval_1"
                type="text"
                name="u_aval_1"
                label="DNI / NIE Aval 1"
                class="c-span-2 corner-top-left corner-bottom-left"
                :invalid="'u_aval_1' in errors"
                :invalid-message="errors['bank_name']"
              />
              <input-field
                v-model="form.u_aval_2"
                type="text"
                name="u_aval_2"
                label="DNI / NIE Aval 2"
                class="c-span-2 corner-top-right cornder-bottom-right"
                :invalid="'u_aval_2' in errors"
                :invalid-message="errors['bank_name']"
              />
            </field-group>
          </form-section>
        </transition>
        <div>
          <button class="btn btn-link-muted" type="button" :aria-controls=" $t('avals.title')" :aria-expanded="showAvals" @click="toggleAvals">
            {{ showAvals ? $t('avals.close') : $t('avals.prompt') }}
          </button>
          <b-icon-question-circle
            v-tooltip="{
              content: $t('avals.tooltip'),
              trigger: 'hover click focus'
            }"
            role="button"
            tabindex="0"
          />
        </div>
      </div>
      <submit-button :submitting="submitting">
        Envia formulari
      </submit-button>
      <legal-notice />
    </form>

    <b-modal id="no-email" title="No tinc e-mail ni/o mòbil" ok-only ok-title="Entès">
      <offline-instructions />
    </b-modal>
  </div>
</template>

<script>
import { BIconQuestionCircle } from 'bootstrap-vue'
import FormSection from '~/components/ui/FormSection'
import FieldGroup from '~/components/ui/FieldGroup'
import InputField from '~/components/ui/InputField'
import InputBirthday from '~/components/ui/InputBirthday'
import InputRadioGroup from '~/components/ui/InputRadioGroup'
import InputSelect from '~/components/ui/InputSelect'
import InputTel from '~/components/ui/InputTel'
import TypeSelection from '~/components/blocks/TypeSelection'
import PartySelection from '~/components/blocks/PartySelection'
import FeeSelection from '~/components/blocks/FeeSelection'
import OfflineInstructions from '~/components/blocks/OfflineInstructions'
import LegalNotice from '~/components/blocks/LegalNotice'
import SubmitButton from '~/components/ui/SubmitButton'

export default {
  components: {
    FormSection,
    FieldGroup,
    InputField,
    InputRadioGroup,
    InputSelect,
    InputTel,
    PartySelection,
    FeeSelection,
    TypeSelection,
    InputBirthday,
    OfflineInstructions,
    LegalNotice,
    BIconQuestionCircle,
    SubmitButton
  },

  async fetch ({ store, params }) {
    await store.dispatch('getInfo')
  },

  asyncData ({ store, route, params }) {
    /* Set party and type */
    const type = route.meta[0].type || '1'
    const party = route.meta[0].party || '14'
    store.commit('setType', type)
    store.commit('setParty', party)
  },

  data () {
    return {
      form: {
        u_party: this.$store.state.form.u_party,
        u_type: this.$store.state.form.u_type,
        u_name: '',
        u_surname: '',
        collectiu: '',
        u_DNI: '',
        u_birthday_day: '',
        u_birthday_month: '',
        u_birthday_year: '',
        u_gender: '',
        u_address: '',
        u_city: '',
        u_postal: '',
        uacc_email: '',
        uacc_email_twice: '',
        u_mobile: '',
        u_mobile_prefix: '34',
        u_phone: '',
        u_phone_prefix: '34',
        u_bank_name: '',
        u_bank_DNI: '',
        u_fee: '37,5',
        u_aval_1: '',
        u_aval_2: ''
      },
      fees: {
        // Compromís
        14: {
          normal: ['37,5', '50', '75', '100'],
          reduced: ['12,5']
        },
        // BLOC
        2: {
          normal: ['36', '50', '75', '100'],
          reduced: ['18']
        },
        // Iniciativa
        3: {
          normal: ['40', '60', '80', '100'],
          reduced: ['10']
        },
        // Verds
        4: {
          normal: ['40', '60', '80', '100'],
          reduced: ['10']
        }
      },
      submitting: false,
      showAvals: false
    }
  },

  computed: {
    collectius () {
      return this.$store.state.info.collectius.map(collectiu => ({ value: collectiu.id, text: collectiu.name }))
    },

    errors () {
      return this.$store.state.errors
    }
  },

  watch: {
    form: {
      handler (form) {
        this.updateForm(form)
      },
      deep: true
    },

    // Set party's base fee when changing parties
    'form.u_party' (party) {
      this.form.u_fee = this.fees[party].normal[0]
    }
  },

  mounted () {
    /* Set referer */
    const urlParams = new URLSearchParams(window.location.search)
    const referer = urlParams.get('ref')
    if (referer) {
      this.$store.commit('updateFormField', { name: 'referer', value: referer })
    }

    this.form = this.$store.state.form
  },

  methods: {
    updateForm (form) {
      this.$store.commit('updateForm', form)
    },

    submit () {
      this.submitting = true
      this.$store.commit('clearErrors')

      this.$api.preflight(this.form)
        .then((resp) => {
          // Redirect adherits to ID verification, otherwise Additional Info
          const name = (this.form.u_type === '1') ? 'verify_id' : 'additional_info'
          // Set user credentials for additional info if simpa
          if ('result' in resp) {
            const { number, token } = resp.result
            this.$store.commit('setCredentials', { number, token })
          }
          // Redirect to next step
          this.$store.commit('setStep', name)
          this.$router.push({ name: name + '___' + this.$i18n.locale })
        }).catch((resp) => {
          // Set errors
          this.$store.commit('setErrors', resp.errors)
          // Scroll to top
          const formStart = this.$refs.errorWarning
          window.scrollTo({
            top: formStart.offsetTop - 80,
            behavior: 'smooth'
          })
          formStart.focus()
        }).then(() => {
          this.submitting = false
        })
    },

    toggleAvals () {
      this.showAvals = !this.showAvals
      if (this.showAvals) {
        this.$refs.avals.focus()
      } else {
        this.form.u_aval_1 = ''
        this.form.u_aval_2 = ''
      }
    },

    head () {
      let title = false
      const titles = {
        2: "Suma't al BLOC - Compromís",
        3: "Suma't a Iniciativa - Compromís",
        4: "Suma't a VerdsEquo - Compromís",
        14: "Suma't a Compromís"
      }

      if ('party' in this.$route.meta) {
        title = titles[this.$route.meta.party]
      }

      return {
        title,
        meta: [
          { hid: 'twitter:title', property: 'twitter:title', content: title },
          { hid: 'og:title', property: 'og:title', content: title }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .hero {
    h1 {
      letter-spacing: -.04em;
      background: $gradient;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      width: fit-content;
      font-size: 8rem;
      font-size: clamp(4.5rem, 8vw, 8rem);
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      font-size: clamp(1.25rem, 4vw, 1.5rem);
      color: $text-muted;
      line-height: 1.25;
    }
  }

  .error-warning {
    background: var(--gray-900);
    color: var(--white);
    font-weight: bold;
  }

  @include media-breakpoint-down (sm) {
    .hero h1 {
      font-size: 4.5rem;
      font-size: clamp(4.5rem, 8vw, 8rem);
    }
  }
</style>
