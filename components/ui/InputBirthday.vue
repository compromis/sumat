<template>
  <fieldset :class="{ 'input-inline-group field': true, 'field-error': invalid }">
    <legend class="input-inline-group-label">
      {{ label }}
    </legend>
    <div class="input-birthday-group">
      <label class="sr-only" :for="`${name}_day`">Dia</label>
      <input
        :id="`${name}_day`"
        ref="day"
        type="text"
        :name="`${name}_day`"
        :value="day"
        class="input"
        placeholder="DD"
        maxlength="2"
        size="2"
        pattern="(0?[1-9]|1[0-9]|2[0-9]|3[01])"
        :required="required"
        @input="(e) => $emit('day-updated', e.target.value)"
        @keyup="(e) => handleKeyUp(e, 2, $refs.day, $refs.month)"
      >
      <span aria-hidden="true">/</span>
      <label class="sr-only" :for="`${name}_month`">Mes</label>
      <input
        :id="`${name}_day`"
        ref="month"
        type="text"
        :name="`${name}_month`"
        :value="month"
        class="input text-center"
        placeholder="MM"
        size="2"
        maxlength="2"
        pattern="(0?[1-9]|1[012])"
        :required="required"
        @input="(e) => $emit('month-updated', e.target.value)"
        @keyup="(e) => handleKeyUp(e, 2, $refs.month, $refs.year)"
        @keydown="(e) => handleKeyDown(e, $refs.month, $refs.day)"
      >
      <span aria-hidden="true">/</span>
      <label class="sr-only" :for="`${name}_year`">Any</label>
      <input
        :id="`${name}_day`"
        ref="year"
        type="text"
        :name="`${name}_year`"
        :value="year"
        class="input"
        placeholder="AAAA"
        maxlength="4"
        size="4"
        pattern="[0-9]{4}"
        :required="required"
        @input="(e) => $emit('year-updated', e.target.value)"
        @keyup="(e) => handleKeyUp(e, 2, $refs.year)"
        @keydown="(e) => handleKeyDown(e, $refs.year, $refs.month)"
      >
      <div v-if="invalid && invalidMessage" class="invalid-message">
        {{ invalidMessage }}
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'InputBirthday',

  props: {
    name: {
      type: String,
      required: true
    },
    day: {
      type: String,
      default: ''
    },
    month: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    },
    label: {
      type: String,
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
    invalidMessage: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleKeyUp (e, maxlength, origin, next) {
      if (origin.value.length >= maxlength && next) {
        next.focus()
      } else if (
        (origin.name === 'u_birthday_month' && origin.value > 1) ||
        (origin.name === 'u_birthday_day' && origin.value > 3)
      ) {
        next.focus()
      }

      // Clear the error when user changes value
      this.$store.commit('clearError', 'u_birthday_day')
    },

    handleKeyDown (e, origin, previous) {
      if (e.code === 'Backspace' && origin.value.length === 0 && previous) {
        previous.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.field {
  transition: 200ms ease-in-out;
}

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

.input-birthday-group {
  display: flex;
  flex-direction: row;

  span {
    font-size: $label-size;
    color: $text-muted;
    margin: 0 .25rem;
  }

  .input {
    padding: 0;
    outline: none;
    border: none;
    overflow: hidden;
    font-size: $label-size;
    background: none;
    width: 2rem;

    &:invalid {
      color: $danger;
    }

    &[size='4'] {
      width: 3.5rem;
    }
  }
}

.field-error {
  border: 1px solid $danger !important;
  background: mix($danger, $white, 15%);
  padding: 1.25rem var(--card-padding) 1.25rem var(--card-padding);

  label {
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
</style>
