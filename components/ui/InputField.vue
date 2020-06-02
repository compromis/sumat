<template>
  <div :class="{ 'field': true, 'field-error': invalid, 'has-value': value }">
    <input :type="type" :name="name" class="input" @input="(e) => $emit('input', e.target.value)">
    <label :for="name" class="label">Email</label>
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
    background: $white;
  }

  .label {
    position: absolute;
    left: 1rem;
    top: 50%;
    color: $gray-700;
    font-size: 1.2rem;
    transform: translateY(-50%);
    transform-origin: 0%;
    transition: transform 400ms;
    pointer-events: none;
  }

  .input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 2rem 1rem 0.75rem 1rem;
    font-size: 1.2rem;
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
