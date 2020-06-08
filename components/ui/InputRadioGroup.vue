<template>
  <div class="input-inline-group">
    <label class="input-inline-group-label" :for="name">
      {{ label }}
    </label>
    <input-radio
      v-for="option in options"
      :key="option.value"
      :name="name"
      :value="option.value"
      :label="option.text"
      :checked="value === option.value"
      :required="required"
      @input="(value) => $emit('input', value)"
    />
  </div>
</template>

<script>
import InputRadio from './InputRadio'

export default {
  name: 'InputRadioGroup',

  components: {
    InputRadio
  },

  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.input-inline-group {
  position: relative;
  background: $white;
  padding: 1.75rem var(--card-padding) .75rem var(--card-padding);

  &-label {
    position: absolute;
    left: 1rem;
    top: 50%;
    color: $text-muted;
    font-size: $label-size;
    transform-origin: 0%;
    transform: scale(0.7) translateY(calc(-50% + -1.5rem));
    opacity: 1;
  }
}
</style>
