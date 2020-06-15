<template>
  <div :class="{ 'field': true, 'field-error': invalid }">
    <div class="sms-input-group">
      <input
        v-for="i in 6"
        :id="'digit_'+i"
        :key="i"
        :ref="'digit_'+i"
        v-model="digits[i-1]"
        type="text"
        :name="'digit_'+i"
        class="input"
        maxlength="1"
        size="1"
        pattern="[0-9]*"
        :aria-label="`Escriu la posició ${i} del codi SMS`"
        :required="required"
        autocomplete="off"
        :autofocus="i === 1"
        @keydown="handleKeyDown($event, i)"
        @paste="handlePaste($event)"
      >
    </div>
    <div class="invalid-message">
      {{ invalidMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSms',

  props: {
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
      digits: ['', '', '', '', '', '']
    }
  },

  watch: {
    digits (newCode) {
      this.$emit('code-updated', newCode.join(''))
    }
  },

  methods: {
    handleKeyDown (e, i) {
      const origin = this.$refs[`digit_${i}`]
      const previous = this.$refs[`digit_${i - 1}`]
      const next = this.$refs[`digit_${i + 1}`]

      if (e.code === 'Backspace') {
        e.preventDefault()
        this.digits.splice(i - 1, 1, '')
        if (previous && origin[0].value.length === 0) {
          previous[0].focus()
          previous[0].select()
        }
      } else if (e.code === 'ArrowLeft' && previous) {
        e.preventDefault()
        previous[0].focus()
        previous[0].select()
      } else if (e.code === 'ArrowRight' && next) {
        e.preventDefault()
        next[0].focus()
        next[0].select()
      } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
        e.preventDefault()
        this.digits.splice(i - 1, 1, e.key)
        if (next) {
          next[0].focus()
        }
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

    &:focus {
      box-shadow: inset 0 0 0 4px var(--primary-semitransparent), $raised-shadow;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .field-error {
    border: 1px solid $danger !important;
    background: mix($danger, $white, 15%);
    padding: 1.25rem var(--card-padding) 1.25rem var(--card-padding);
    border-radius: $card-radius;
  }

  .invalid-message {
    font-size: .75rem;
    color: $danger;
    margin-top: 1rem;
  }
</style>
