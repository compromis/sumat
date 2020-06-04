<template>
  <div class="container">
    <h2>Adhereix-te!</h2>
    <p>
      A Compromís apostem per una nova manera de fer política. I sabem que el nostre principal actiu ets tu.
      Per això pensem que la millor manera de donar a conèixer el nostre projecte és confiar en la teua implicació,
      il·lusió i desig de canvi. Ens ajudes?
    </p>

    <form @submit.prevent="submit">
      <section id="party" aria-label="Partit">
        <div class="row party">
          <div class="col-md-3 d-flex">
            <input-radio-button
              name="u_party"
              value="14"
              label="Compromís"
              :checked="form.u_party === '14'"
              @input="(value) => form.u_party = value"
            />
          </div>
          <div class="col-md-3 d-flex">
            <input-radio-button
              name="u_party"
              value="2"
              label="Bloc"
              :checked="form.u_party === '2'"
              @input="(value) => form.u_party = value"
            />
          </div>
          <div class="col-md-3 d-flex">
            <input-radio-button
              name="u_party"
              value="3"
              label="Iniciativa"
              :checked="form.u_party === '3'"
              @input="(value) => form.u_party = value"
            />
          </div>
          <div class="col-md-3 d-flex">
            <input-radio-button
              name="u_party"
              value="4"
              label="Verds"
              :checked="form.u_party === '4'"
              @input="(value) => form.u_party = value"
            />
          </div>
        </div>
      </section>

      <section id="type" aria-label="Tipus d'afiliació">
        <div class="row">
          <div class="col-md-3 d-flex">
            <input-radio-button
              name="u_type"
              value="1"
              label="Adherit"
              :checked="form.u_type === '1'"
              @input="(value) => form.u_type = value"
            >
              Com a adherit/da tindràs tots els drets i deures recollits en les <a href="#">bases de la Coalició Compromís</a>.
            </input-radio-button>
          </div>
          <div class="col-md-3 d-flex">
            <input-radio-button
              name="u_type"
              value="2"
              label="Simpatitizant"
              :checked="form.u_type === '2'"
              @input="(value) => form.u_type = value"
            >
              Si encara no t'has decidit a adherir-te a Compromís, pots participar com a simpatitzant
            </input-radio-button>
          </div>
        </div>
      </section>

      <field-group id="dades-personals" title="Dades personals">
        <input-field v-model="form.u_name" label="Nom" class="c-span-2 corner-top-left" />
        <input-field v-model="form.u_surname" label="Cognoms" class="c-span-2 corner-top-right" />
        <input-field v-model="form.U_DNI" label="DNI" />
        <input-field v-model="form.u_birthday" label="Data de naixement" />
        <input-radio-group v-model="form.u_gender" label="Gènere" :options="[{value: 'M', text: 'Home'}, {value:'F', text: 'Dona'}, {value:'A', text: 'Altre'}]" class="c-span-2" />
        <input-field v-model="form.u_address" label="Adreça" class="c-span-2 corner-bottom-left" />
        <input-field v-model="form.u_city" label="Població" />
        <input-field v-model="form.u_postal" label="Codi postal" class="corner-bottom-right" />
      </field-group>

      <field-group id="contacte" title="Informació de contacte" />

      <field-group id="collectiu" title="Col·lectiu">
        <input-select v-model="form.collectiu" name="collectiu" label="Selecciona un col·lectiu" :options="collectius" class="c-span-4" />
      </field-group>

      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import FieldGroup from '~/components/ui/FieldGroup'
import InputField from '~/components/ui/InputField'
import InputRadioButton from '~/components/ui/InputRadioButton'
import InputRadioGroup from '~/components/ui/InputRadioGroup'
import InputSelect from '~/components/ui/InputSelect'

export default {
  components: {
    FieldGroup,
    InputField,
    InputRadioButton,
    InputRadioGroup,
    InputSelect
  },

  async fetch ({ store, params }) {
    await store.dispatch('getInfo')
  },

  data () {
    return {
      form: {
        u_party: '14',
        u_type: '1',
        u_name: '',
        u_surname: '',
        collectiu: '',
        U_DNI: '',
        u_birthday: '',
        u_gender: '',
        u_address: '',
        u_city: '',
        u_postal: ''
      },
      submitting: false,
      errors: {}
    }
  },

  computed: {
    collectius () {
      return this.$store.state.info.collectius.map(collectiu => collectiu.name)
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
          this.$router.push({ name })
        }).catch((resp) => {
          // Set errors
          this.errors = resp.errors
        }).then(() => {
          // Scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
          this.submitting = false
        })
    }
  }
}
</script>

<style lang="scss">
@import '../sass/variables';

section {
  margin: 2.25rem 0;
}
</style>
