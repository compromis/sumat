<template>
  <div class="container">
    <h2>Adhereix-te!</h2>
    <p>
      A Compromís apostem per una nova manera de fer política. I sabem que el nostre principal actiu ets tu.
      Per això pensem que la millor manera de donar a conèixer el nostre projecte és confiar en la teua implicació,
      il·lusió i desig de canvi. Ens ajudes?
    </p>
    <form @submit.prevent="submit">
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
      <div class="row">
        <div class="col-md-3 d-flex">
          <input-radio-button
            name="u_type"
            value="1"
            label="Adherit"
            :checked="form.u_type === '1'"
            @input="(value) => form.u_type = value"
          >
            Com a adherit/adherida tindràs tots els drets i deures recollits en les <a href="#">bases de la Coalició Compromís</a>.
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
      <h4>Dades Personals</h4>
      <div class="c-card">
        <div class="fields">
          <input-field v-model="form.u_name" label="Nom" class="cspan-2 corner-top-left" />
          <input-field v-model="form.u_surname" label="Cognoms" class="cspan-2 corner-top-right" />
          <input-field v-model="form.U_DNI" label="DNI" />
          <input-field v-model="form.u_birthday" label="Data Naixement" />
          <div class="input-inline-group cspan-2">
            <div class="input-inline-group-label">
              Gènere
            </div>
            <input-radio
              name="u_gender"
              value="1"
              label="Home"
              :checked="form.u_gender === '1'"
              @input="(value) => form.u_gender = value"
            />
            <input-radio
              name="u_gender"
              value="2"
              label="Dona"
              :checked="form.u_gender === '2'"
              @input="(value) => form.u_gender = value"
            />
            <input-radio
              name="u_gender"
              value="3"
              label="Altre"
              :checked="form.u_gender === '3'"
              @input="(value) => form.u_gender = value"
            />
          </div>
          <input-field v-model="form.u_address" label="Adreça" class="cspan-2 corner-bottom-left" />
          <input-field v-model="form.u_city" label="Població" />
          <input-field v-model="form.u_postal" label="Codi postal" class="corner-bottom-right" />
        </div>
      </div>
      <h4>Informació de contacte</h4>
      <h4>Col·lectiu</h4>
      <div class="c-card">
        <input-select label="Selecciona un col·lectiu" :options="collectius" />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import InputField from '~/components/ui/InputField'
import InputRadioButton from '~/components/ui/InputRadioButton'
import InputRadio from '~/components/ui/InputRadio'
import InputSelect from '~/components/ui/InputSelect'

export default {
  components: {
    InputField,
    InputRadioButton,
    InputSelect,
    InputRadio
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
        u_colectiu: '',
        U_DNI: '',
        u_birthday: '',
        u_gender: '',
        u_address: '',
        u_city: '',
        u_postal: ''
      }
    }
  },

  computed: {
    collectius () {
      return this.$store.state.info.collectius.map(collectiu => collectiu.name)
    },
    submitting: false,
    errors: {}
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

form {
  color: $body-color;
}

.fields {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: $gray-300;
  gap: 1px;

  .cspan-2 {
    grid-column: span 2;
  }
}

.c-card {
  padding: 0;
  overflow: hidden;
}

.input-inline-group {
  position: relative;
  background: $white;
  padding: 2rem 1rem 0.75rem 1rem;

  &-label {
    position: absolute;
    left: 1rem;
    top: 50%;
    color: $gray-700;
    font-size: 1.2rem;
    transform-origin: 0%;
    transform: scale(0.7) translateY(calc(-50% + -1.5rem));
    opacity: 1;
  }
}
</style>
