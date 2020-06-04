<template>
  <div class="container">
    <h2>Adhereix-te!</h2>
    <p>
      A Compromís apostem per una nova manera de fer política. I sabem que el nostre principal actiu ets tu.
      Per això pensem que la millor manera de donar a conèixer el nostre projecte és confiar en la teua implicació,
      il·lusió i desig de canvi. Ens ajudes?
    </p>
    <form @submit.prevent="submit">
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
      <div class="c-card">
        <div class="fields">
          <input-field v-model="form.u_name" class="cspan-2 corner-top-left" />
          <input-field v-model="form.u_surname" class="cspan-2 corner-top-right" />
          <input-field class="cspan-2" />
          <input-field />
          <input-field invalid />
        </div>
      </div>
      <div class="c-card">
        <input-select label="Selecciona un col·lectiu" :options="colectius" />
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
import InputSelect from '~/components/ui/InputSelect'

export default {
  components: {
    InputField,
    InputRadioButton,
    InputSelect
  },

  async fetch ({ store, params }) {
    await store.dispatch('getInfo')
  },

  data () {
    return {
      form: {
        u_type: '1',
        u_name: '',
        u_surname: '',
        u_colectiu: ''
      },
      colectius: [
        'vilamrxant',
        'benaguasil',
        'benissanó'
      ],
      submitting: false,
      errors: {}
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
</style>
