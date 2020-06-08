<template>
  <div class="row party" @input.capture="(e) => handlePartyChange(e)">
    <div class="col-md-3 d-flex">
      <input-radio-button
        name="u_party"
        value="14"
        label="Compromís"
        :checked="value === '14'"
        @input="(value) => $emit('input', value)"
      />
    </div>
    <div class="col-md-3 d-flex">
      <input-radio-button
        name="u_party"
        value="2"
        label="Bloc"
        :checked="value === '2'"
        @input="(value) => $emit('input', value)"
      />
    </div>
    <div class="col-md-3 d-flex">
      <input-radio-button
        name="u_party"
        value="3"
        label="Iniciativa"
        :checked="value === '3'"
        @input="(value) => $emit('input', value)"
      />
    </div>
    <div class="col-md-3 d-flex">
      <input-radio-button
        name="u_party"
        value="4"
        label="Verds"
        :checked="value === '4'"
        @input="(value) => $emit('input', value)"
      />
    </div>
  </div>
</template>

<script>
import InputRadioButton from '~/components/ui/InputRadioButton'

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

  methods: {
    handlePartyChange (e) {
      const parties = this.$store.state.partySlugs
      const simpatitzant = this.$store.state.form.u_type === '2' ? 'simpatitzant' : ''
      history.replaceState({}, null, parties[e.target.value] + simpatitzant)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
