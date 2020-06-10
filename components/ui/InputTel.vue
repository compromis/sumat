<template>
  <fieldset :class="{ 'input-inline-group field': true, 'field-error': invalid }">
    <legend class="input-inline-group-label">
      {{ label }}
    </legend>
    <div class="phone-input-wrapper">
      <div>
        <label class="sr-only" :for="name-select">Prefixe telefònic</label>
        <div class="phone-select-wrapper">
          <select
            :id="name-select"
            v-model="countryCode"
            :options="countryCodes"
            :name="name-select"
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
          :id="id"
          ref="number"
          type="text"
          :name="name"
          :value="value"
          class="input"
          maxlength="10"
          placeholder="600 000 000"
          :required="required"
          @input="(e) => $emit('number-updated', e.target.value)"
        >
        <div v-if="invalid && invalidMessage" class="invalid-message">
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
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    nameSelect: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Telèfon'
    },
    defaultCountryCode: {
      type: String,
      default: '34'
    },
    invalid: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      countryCode: '34',
      countryCodes
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
  input {
    border-radius: 0;
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
  width: 90px;
  margin-right: .5rem;

  select {
    appearance: none;
    border: none;
    background-color: var(--white);
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
    font-size: 2.25rem;
    right: .25rem;
    top: -.85rem;
    font-weight: 300;
    transform: rotate(90deg);
    pointer-events: none;
  }
}
</style>
