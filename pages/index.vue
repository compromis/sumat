<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-md-3 d-flex">
          <input-radio
            name="u_type"
            value="1"
            label="Adherit"
            :checked="form.u_type === '1'"
            @input="(value) => form.u_type = value"
          >
            Com a adherit/adherida tindràs tots els drets i deures recollits en les <a href="#">bases de la Coalició Compromís</a>.
          </input-radio>
        </div>
        <div class="col-md-3 d-flex">
          <input-radio
            name="u_type"
            value="2"
            label="Simpatitizant"
            :checked="form.u_type === '2'"
            @input="(value) => form.u_type = value"
          >
            Si encara no t'has decidit a adherir-te a Compromís, pots participar com a simpatitzant
          </input-radio>
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
      <nuxt-link to="step2">
        Next
      </nuxt-link>
    </form>
  </div>
</template>

<script>
import InputField from '~/components/ui/InputField'
import InputRadio from '~/components/ui/InputRadio'

export default {
  components: {
    InputField,
    InputRadio
  },

  async fetch ({ store, params }) {
    await store.dispatch('getInfo')
  },

  data () {
    return {
      form: {
        u_type: '1',
        u_name: '',
        u_surname: ''
      }
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
