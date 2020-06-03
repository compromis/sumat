<template>
  <label :class="{'label c-card c-card-rises' : true, 'checked' : checked}" :for="name+value"> <span>{{ label }}</span>
    <div class="description"><slot /></div>
    <input
      :id="name+value"
      type="radio"
      :name="name"
      :value="value"
      class="input"
      :checked="checked"
      @input="$emit('input', value)"
    >
  </label>
</template>

<script>
export default {
  name: 'InputRadioButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.label {
  text-align: left;
  font-size: 1.25rem;
  display: block;
  position: relative;
  padding: .75rem 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  .description {
    font-size: .8rem;
    opacity: .75;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
}

.checked {
  color: $white;
  background: $gradient;
  a {
    color: white;
  }
}

.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

</style>
