<template>
  <fieldset>
    <div class="sms-input-group">
      <input
        v-for="i in 6"
        :id="'digit_'+i"
        :key="i"
        :ref="'field_'+i"
        type="text"
        :name="'digit_'+i"
        class="input"
        placeholder="X"
        maxlength="1"
        size="1"
        :required="required"
        @keydown="(e) => handleKeyDown(e, $refs[`field_${i}`], $refs[`field_${i-1}`])"
        @keyup="(e) => handleKeyUp(e, 1, $refs[`field_${i+1}`])"
      >
    </div>
    <div>
      {{ invalidMessage }}
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'InputSms',

  props: {
    name: {
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
    handleKeyUp (e, maxlength, target) {
      if (target) {
        target.focus()
      }
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

  .sms-input-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .input {
    padding: 0;
    text-align: center;
    font-size: 2rem;
    outline: none;
    border: none;
    overflow: hidden;
    box-shadow: $default-shadow;
    background: none;
    width: 5rem;
    height: 5rem;
    border-radius: $border-radius;
    margin-right: 1rem;
    background: $white;

    &:invalid {
      color: $danger;
    }

    &[size='4'] {
      width: 3.5rem;
    }
  }

  .field-error {
    border: 1px solid $danger !important;
    background: mix($danger, $white, 15%);
    padding: 1.25rem var(--card-padding) 1.25rem var(--card-padding);
  }

  legend {
    color: $danger;
    transform: scale(0.7) translateY(calc(-50% + -2rem)) !important;
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
