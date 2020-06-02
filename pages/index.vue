<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-md-3">
          <input-radio name="afiliat" value="afiliat" />
        </div>
        <div class="col-md-3">
          <input-radio name="afiliat" value="simpatitzant" />
        </div>
      </div>
      <div class="compromis-card">
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

  data () {
    return {
      form: {
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

.compromis-card {
  padding: 0;
  overflow: hidden;
}
</style>
