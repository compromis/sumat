<template>
  <div class="container">
    <h2>Adhereix-te!</h2>
    <p>
      A Compromís apostem per una nova manera de fer política.
      I sabem que el nostre principal actiu ets tu.
      Per això pensem que la millor manera de donar a conèixer
      el nostre projecte és confiar en la teua implicació,
      il·lusió i desig de canvi. Ens ajudes?
    </p>

    <form @submit.prevent="submit">
      <form-section id="party" title="Partit" title-hidden>
        <party-selection v-model="form.u_party" />
      </form-section>

      <form-section id="type" title="Tipus d'afiliació" title-hidden>
        <type-selection v-model="form.u_type" />
      </form-section>

      <form-section id="dades-personals" title="Dades personals">
        <field-group>
          <input-field
            v-model="form.u_name"
            label="Nom"
            name="u_name"
            class="c-span-2 corner-top-left"
            autocomplete="given-name"
            required
            :invalid="'u_name' in errors"
            :invalid-message="errors['u_name']"
          />
          <input-field
            v-model="form.u_surname"
            label="Cognoms"
            name="u_surname"
            class="c-span-2 corner-top-right"
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
            required
          />
          <input-birthday
            name="u_birthday"
            label="Data de naixement"
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
            label="Gènere"
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
            label="Adreça"
            name="u_address"
            class="c-span-2 corner-bottom-left"
            autocomplete="street-address"
            required
            :invalid="'u_address' in errors"
            :invalid-message="errors['u_address']"
          />
          <input-field
            v-model="form.u_city"
            label="Població"
            name="u_city"
            required
            :invalid="'u_city' in errors"
            :invalid-message="errors['u_city']"
          />
          <input-field
            v-model="form.u_postal"
            label="Codi postal"
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

      <form-section id="contacte" title="Informació de contacte">
        <field-group>
          <input-field
            v-model="form.uacc_email"
            type="email"
            name="u_email"
            label="E-mail"
            class="c-span-2 corner-top-left"
            required
            :invalid="'u_email' in errors"
            :invalid-message="errors['u_email']"
          />
          <input-field
            v-model="form.uacc_email_twice"
            type="email"
            name="u_email_twice"
            label="Repeteix l'e-mail"
            class="c-span-2 corner-top-right"
            required
            :invalid="'u_email_twice' in errors"
            :invalid-message="errors['u_email_twice']"
          />
        </field-group>
      </form-section>

      <form-section id="collectiu" title="Col·lectiu">
        <field-group>
          <input-select
            v-model="form.collectiu"
            name="collectiu"
            label="Selecciona un col·lectiu"
            :options="collectius"
            class="c-span-4"
            required
          />
        </field-group>
      </form-section>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import FormSection from '~/components/ui/FormSection'
import FieldGroup from '~/components/ui/FieldGroup'
import InputField from '~/components/ui/InputField'
import InputBirthday from '~/components/ui/InputBirthday'
import InputRadioGroup from '~/components/ui/InputRadioGroup'
import InputSelect from '~/components/ui/InputSelect'
import TypeSelection from '~/components/blocks/TypeSelection'
import PartySelection from '~/components/blocks/PartySelection'

export default {
  components: {
    FormSection,
    FieldGroup,
    InputField,
    InputRadioGroup,
    InputSelect,
    PartySelection,
    TypeSelection,
    InputBirthday
  },

  async fetch ({ store, params }) {
    await store.dispatch('getInfo')
  },

  data () {
    return {
      form: {
        u_party: this.$store.state.form.u_party,
        u_type: '1',
        u_name: '',
        u_surname: '',
        collectiu: '',
        u_DNI: '',
        u_birthday: '',
        u_gender: '',
        u_address: '',
        u_city: '',
        u_postal: '',
        uacc_email: '',
        uacc_email_twice: '',
        u_birthday_day: '',
        u_birthday_month: '',
        u_birthday_year: ''
      },
      submitting: false
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
    }
  },

  methods: {
    updateForm (form) {
      this.$store.commit('updateForm', form)
    },

    submit () {
      this.submitting = true
      this.$preflight(this.form)
        .then(() => {
          // Redirect adherits to ID verification, otherwise Additional Info
          const name = (this.form.u_type === '1') ? 'verify_id' : 'additional_info'
          this.$store.commit('incrementStep')
          this.$router.push({ name })
        }).catch((resp) => {
          // Set errors
          this.$store.commit('setErrors', resp.errors)
          // Scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }).then(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style lang="scss">
@import '../sass/variables';

</style>
