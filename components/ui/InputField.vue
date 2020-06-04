<template>
  <div :class="{ 'field': true, 'field-error': invalid, 'has-value': value }">
    <label :for="name" class="label">{{ label }}</label>
    <input :type="type" :name="name" class="input" :autocomplete="autocomplete" @input="(e) => $emit('input', e.target.value)">
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.field {
    width: 100%;
    margin: 0 auto;
    position: relative;
    transition: 500ms;
    z-index: 10;
    padding: 0;
    background: var(--white);
  }

  .label {
    position: absolute;
    left: var(--card-padding);
    top: 50%;
    color: $text-muted;
    font-size: $label-size;
    transform: translateY(-50%);
    transform-origin: 0%;
    transition: transform 200ms;
    pointer-events: none;
  }

  .input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 1.75rem var(--card-padding) .75rem var(--card-padding);
    font-size: $label-size;
    background: none;
  }

  .field:focus-within .label,
  .has-value .label {
    transform: scale(0.7) translateY(calc(-50% + -1.5rem));
    opacity: 1;
  }

  .field-error {
    label {
      color: $danger;
    }

    input {
      border: 1px solid $danger !important;
      background: rgba($danger, 0.25);
    }
  }
</style>
