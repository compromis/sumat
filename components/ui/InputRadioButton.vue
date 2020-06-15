<template>
  <label
    :class="{
      'c-card c-card-rises mb-3 mb-md-0' : true,
      'checked' : checked,
      'will-hide parties': name === 'u_party',
      'hidden': hiddenIfUnchecked && !checked
    }"
    :for="name+value"
  >
    <component :is="logo" v-if="logo" mono class="logo" />
    <span :class="{'sr-only': logo}">{{ label }}</span>
    <div class="description">
      <slot />
    </div>
    <input
      :id="name+value"
      type="radio"
      :name="name"
      :value="value"
      class="sr-only"
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
    logo: {
      type: [Object, Boolean],
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    hiddenIfUnchecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

label {
  text-align: left;
  font-size: 1.25rem;
  display: block;
  position: relative;
  padding: 1rem 1.5rem;
  margin: 0;
  cursor: pointer;
  font-size: 1.3rem;
  user-select: none;
  width: 100%;

  &.will-hide {
    transition: max-height 400ms ease-in-out, padding 400ms ease-in-out, margin 400ms ease-in-out, transform 150ms ease-in-out, box-shadow 100ms ease-in-out;
    will-change: max-height, padding, margin, transform, box-shadow;
    max-height: 100px;
    overflow: hidden;
  }

  &.parties {
    display: flex;
    align-items: center;
  }

  .description {
    font-size: .8rem;
    opacity: .75;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  &:focus-within {
    box-shadow: 0 0 0 4px var(--primary-semitransparent), $raised-shadow;
  }
}

.checked {
  color: $white;
  background: var(--primary);
  background: $gradient;

  a {
    color: $white;
  }

  .logo {
    color: $white;
  }
}

.logo {
  display: block;
  color: $text-muted;
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
}

@include media-breakpoint-down(sm) {
  label {

    &.hidden {
      max-height: 0 !important;
      padding: 0 1.5rem !important;
      margin: 0 !important;
    }

    .logo {
      margin: 0;
    }
  }
}
</style>
