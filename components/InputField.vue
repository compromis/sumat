<template>
  <div class="field">
    <input :type="type" :name="name" class="input" placeholder=" ">
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
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.field {
    width: 100%;
    margin: 0 auto;
    position: relative;
    transition: 500ms;
    z-index: 10;
    padding: 0;
  }

  .label {
    position: absolute;
    left: 1rem;
    top: 1.35rem;
    color: $gray-700;
    font-size: 1.2rem;
    transform-origin: 0%;
    transition: transform 400ms;
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
  .input:not(:placeholder-shown) + .label {
    transform: scale(0.7) translateY(-1.1rem);
    opacity: 1;
  }

  .field-error {
    border: 1px solid $danger !important;
    background: $danger;
  }
</style>
