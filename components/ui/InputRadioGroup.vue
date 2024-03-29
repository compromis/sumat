<template>
  <fieldset :class="{ 'field': true, 'input-inline-group': !block, 'input-block-group': block, 'field-error': invalid }">
    <legend :class="['input-inline-group-label', { 'sr-only': labelSrOnly }]">
      {{ label }}
    </legend>
    <input-radio
      v-for="option in options"
      :key="option.value"
      :name="name"
      :value="option.value"
      :label="option.text"
      :checked="value === option.value"
      :required="required"
      :aria-describedby="invalid ? name + 'Error' : null"
      @input="(value) => { $emit('input', value); $store.commit('clearError', name) }"
    />
    <div v-if="invalid && invalidMessage" :id="name + 'Error'" class="invalid-message">
      {{ invalidMessage }}
    </div>
  </fieldset>
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
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    invalidMessage: {
      type: String,
      default: ''
    },
    labelSrOnly: {
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
  background: var(--white);
  padding: 1.75rem var(--card-padding) .75rem var(--card-padding);

  &-label {
    position: absolute;
    left: 1rem;
    top: 50%;
    color: $text-muted;
    font-size: $label-size;
    transform-origin: 0%;
    transform: scale(0.7) translateY(calc(-50% + -1.75rem));
    opacity: 1;
  }
}

.field-error {
  border: 1px solid $danger !important;
  background: mix($danger, $white, 15%);
  padding: 1.25rem var(--card-padding) 1.25rem var(--card-padding);

  .input-inline-group-label {
    color: $danger;
    transform: scale(0.7) translateY(calc(-50% + -2rem)) !important;
  }
}

.invalid-message {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: .75rem;
  padding: 0 var(--card-padding);
  background: $danger;
  color: $white;
}

.input-block-group {
  margin: 0 0 1rem 0;
}
</style>
