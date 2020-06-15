<template>
  <div class="c-card field-group">
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

<style lang="scss">
@import '../../sass/variables';

.field-group {
  &.c-card {
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

  /* Corners */
  .corner {
    &-top-left.field-error,
    &-top-left input,
    &-top-left select {
      border-top-left-radius: $card-radius;
    }

    &-top-right.field-error,
    &-top-right input,
    &-top-right select {
      border-top-right-radius: $card-radius;
    }

    &-bottom-left.field-error,
    &-bottom-left input,
    &-bottom-left select {
      border-bottom-left-radius: $card-radius;
    }

    &-bottom-right.field-error,
    &-bottom-right input,
    &-bottom-right select {
      border-bottom-right-radius: $card-radius;
    }
  }
}

@include media-breakpoint-down(md) {
  .field-group {
    .fields {
      grid-template-columns: 1fr 1fr;

      .c-span-1-full,
      .c-span-2,
      .c-span-3,
      .c-span-4 {
        grid-column: span 2;
      }
    }

    .md\:reset-corner.field-error,
    .md\:reset-corner input,
    .md\:reset-corner select {
      border-radius: 0;
    }

    .md\:corner {
      &-top-left.field-error,
      &-top-left input,
      &-top-left select {
        border-top-left-radius: $card-radius;
      }

      &-top-right.field-error,
      &-top-right input,
      &-top-right select {
        border-top-right-radius: $card-radius;
      }

      &-bottom-left.field-error,
      &-bottom-left input,
      &-bottom-left select {
        border-bottom-left-radius: $card-radius;
      }

      &-bottom-right.field-error,
      &-bottom-right input,
      &-bottom-right select {
        border-bottom-right-radius: $card-radius;
      }
  }
  }
}

@include media-breakpoint-down(sm) {
  .field-group {
    .fields {
      grid-template-columns: 1fr;

      .c-span-2,
      .c-span-3,
      .c-span-4 {
        grid-column: span 1;
      }

      .field,
      .field select,
      .field input {
        border-radius: 0;
      }

      .field:first-child,
      .field:first-child input,
      .field:first-child select {
        border-radius: $card-radius $card-radius 0 0;
      }

      .field:last-child,
      .field:last-child input,
      .field:last-child select {
        border-radius: 0 0 $card-radius $card-radius;
      }
    }
  }
}
</style>
