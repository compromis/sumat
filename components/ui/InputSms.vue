<template>
  <fieldset>
    <div class="sms-input-group">
      <input
        v-for="i in 6"
        :id="'digit_'+i"
        :key="i"
        :ref="'field_'+i"
        v-model="digits[i-1]"
        type="tel"
        :name="'digit_'+i"
        class="input"
        maxlength="1"
        size="1"
        :aria-label="`Escriu la posició ${i+1} del codi SMS`"
        :required="required"
        @keydown="handleKeyDown($event, i)"
        @keyup="handleKeyUp($event, i)"
        @paste="handlePaste($event)"
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
  data () {
    return {
      digits: []
    }
  },

  watch: {
    digits (newCode, oldCode) {
      this.$emit('code-updated', newCode.join(''))
    }
  },

  methods: {
    handleKeyUp (e, i) {
      const target = this.$refs[`field_${i + 1}`]

      if (target && e.code !== 'Backspace') {
        target[0].focus()
      }
    },

    handleKeyDown (e, i) {
      const origin = this.$refs[`field_${i}`]
      const previous = this.$refs[`field_${i - 1}`]

      if (e.code === 'Backspace' && origin[0].value.length === 0 && previous) {
        previous[0].focus()
      }
    },
    handlePaste (e) {
      const code = (e.clipboardData || window.clipboardData).getData('text').split('')
      this.digits = code
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
