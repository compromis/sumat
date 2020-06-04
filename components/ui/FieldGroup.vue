<template>
  <section :id="id" :aria-labelledby="`${id}Label`">
    <h4 v-if="title" :id="`${id}Label`">
      {{ title }}
    </h4>
    <div class="c-card">
      <div class="fields">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FieldGroup',

  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

h4 {
  font-weight: 700;
  margin-bottom: 1rem;
}

.c-card {
  padding: 0;
  overflow: hidden;
}

.fields {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--gray-300);
  gap: 1px;

  .c-span-2 {
    grid-column: span 2;
  }

  .c-span-3 {
    grid-column: span 3;
  }

  .c-span-4 {
    grid-column: span 4;
  }
}
</style>
