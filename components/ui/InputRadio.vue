<template>
  <label :class="{'label' : true, 'checked' : checked}" :for="name+value"> <span>{{ label }}</span>
    <input
      :id="name+value"
      type="radio"
      :name="name"
      :value="value"
      class="input"
      :checked="checked"
      :required="required"
      @input="$emit('input', value)"
    >
    <span class="checkbox" />
  </label>
</template>

<script>
export default {
  name: 'InputRadio',
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

.label {
  text-align: left;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin-bottom: 0;

  span {
    font-size: 1.2rem;
    margin-left: 1.5rem;
    margin-right: 1rem;
  }

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
  span {
    color: var(--primary);
  }
  .checkbox {
    border-color: var(--primary);
    &::after {
      content: '';
      height: 8px;
      width: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      background: var(--primary);
    }
  }
}

.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox {
  position: absolute;
  left: -1.5rem;
  top: 50%;
  height: 16px;
  width: 16px;
  transform: translateY(-50%);
  border-radius: 100%;
  border: 1px solid var(--gray-500);
}

</style>
