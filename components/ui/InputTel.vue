<template>
  <fieldset :class="{ 'input-inline-group field': true, 'field-error': invalid }">
    <legend class="input-inline-group-label">
      {{ label }}
    </legend>
    <div class="phone-input-wrapper">
      <div>
        <label class="sr-only" :for="`${name}_prefix`">Prefixe internacional</label>
        <div class="phone-select-wrapper">
          <select
            :id="`${name}_prefix`"
            v-model="countryCode"
            :name="`${name}_prefix`"
            :required="required"
            @change="handleChange($event)"
          >
            <option :value="countryCode">
              +{{ countryCode }}
            </option>
            <option v-for="(code, key) in countryCodes" :key="key" :value="code.value">
              {{ code.text }}
            </option>
          </select>
        </div>
      </div>
      <div class="phone-text-wrapper">
        <label class="sr-only" :for="name">Telèfon</label>
        <input
          :id="name"
          ref="number"
          type="tel"
          :name="name"
          :value="number"
          class="input"
          maxlength="10"
          pattern="[0-9]*"
          :placeholder="placeholder"
          :required="required"
          :aria-describedby="name + 'Error'"
          :aria-invalid="invalid"
          @input="$emit('number-updated', $event.target.value)"
        >
        <div v-if="invalid && invalidMessage" :id="name + 'Error'" class="invalid-message">
          {{ invalidMessage }}
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import countryCodes from '../data/countryCodes'

export default {
  name: 'InputTel',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Telèfon'
    },
    number: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: '34'
    },
    placeholder: {
      type: String,
      default: '600 000 000'
    },
    invalid: {
      type: Boolean,
      default: false
    },
    invalidMessage: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      countryCodes,
      countryCode: '34'
    }
  },
  watch: {
    prefix (prefix) {
      this.countryCode = prefix
    }
  },
  methods: {
    handleChange (e) {
      this.$emit('prefix-updated', e.target.value)
      this.$refs.number.focus()
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

.phone-input-wrapper {
  display: flex;
  align-items: center;
}

.phone-text-wrapper {
  width: 100%;

  input {
    border-radius: 0;
    width: 100%;
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

.input {
    padding: 0;
    outline: none;
    border: none;
    overflow: hidden;
    font-size: $label-size;
    background: none;

    &:invalid {
      color: $danger;
    }
  }

.phone-select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 70px;
  margin-right: .5rem;

  select {
    appearance: none;
    border: none;
    background-color: transparent;
    font-size: $label-size;
    width: 100%;
    color: $text-default;

    &:focus {
      outline: 0;
      box-shadow: inset 0 0 0 4px var(--primary-semitransparent);
    }
  }

  &::after {
    content: ">";
    position: absolute;
    font-size: 1.5rem;
    right: .25rem;
    top: -.25rem;
    font-weight: 300;
    transform: rotate(90deg);
    pointer-events: none;
  }
}
</style>
