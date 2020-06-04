<template>
  <div class="c-card">
    <div class="fields">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldGroup'
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

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
