<template>
  <div :class="{ 'field': true, 'field-error': invalid, 'has-value': value }">
    <label :for="name" class="label">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :value="value"
      :maxlength="maxlength"
      class="input"
      :autocomplete="autocomplete"
      :required="required"
      :pattern="pattern"
      @input="(e) => $emit('input', e.target.value)"
    >
    <div v-if="invalid && invalidMessage" class="invalid-message">
      {{ invalidMessage }}
    </div>
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
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    },
    invalidMessage: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String,
      default: null
    },
    maxlength: {
      type: String,
      default: null
    }
  },

  watch: {
    value () {
      if (this.invalid) {
        this.$store.commit('clearError', this.name)
      }
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
    transition: 200ms ease-in-out;
  }

  .field:focus-within .label,
  .has-value .label {
    transform: scale(0.7) translateY(calc(-50% + -1.5rem));
    opacity: 1;
  }

  .field-error {
    label {
      color: $danger;
      transform: scale(0.7) translateY(calc(-50% + -2rem)) !important;
    }

    input {
      border: 1px solid $danger !important;
      background: rgba($danger, 0.15);
      padding: 1.25rem var(--card-padding) 1.25rem var(--card-padding);
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
</style>
