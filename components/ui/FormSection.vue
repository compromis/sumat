<template>
  <section :id="id" :aria-labelledby="`${id}Label`">
    <h4 v-if="title" :id="`${id}Label`" :class="{'sr-only': titleHidden}">
      {{ title }}
    </h4>
    <slot />
  </section>
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
      default: ''
    },

    titleHidden: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 2.5rem 0;
}

h4 {
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
