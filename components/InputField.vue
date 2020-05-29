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
    border-bottom: 1px solid $body-color;
    transition: 500ms;
    z-index: 10;
  }

  .label {
    position: absolute;
    left: 0;
    top: 1rem;
    color: $body-color;
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
    padding: 1.75rem 0 0.5rem 0;
    font-size: 1.1rem;
    background: none;
  }

  .field:focus-within .label,
  .input:not(:placeholder-shown) + .label {
    transform: scale(0.8) translateY(-1.1rem);
    opacity: 1;
  }
</style>
