<template>
  <fieldset :id="id">
    <legend :class="{'sr-only': titleHidden}">
      {{ title }}
    </legend>
    <slot />
  </fieldset>
</template>

<script>
export default {
  name: 'FormSection',

  props: {
    id: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      required: true
    },

    titleHidden: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
fieldset {
  margin: 2.5rem 0;
}

legend {
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: -.02em;
}
</style>
