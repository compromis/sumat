<template>
  <div class="select-wrapper">
    <select id="for" name="for">
      <option value="" hidden selected disabled>
        {{ label }}
      </option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    for: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" >
@import '../../sass/variables';

.select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  font-weight: bold;

  select .empty {
    color: gray;
  }

  select,
  input {
    appearance: none;
    border: none;
    border-radius: 0;
    background-color: var(--white);
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
    color: $text-default;

    &:focus {
      outline: 0;
    }
  }

  &::after {
    content: ">";
    position: absolute;
    font-size: 2.25rem;
    right: 1rem;
    top: .5rem;
    font-weight: 300;
    transform: rotate(90deg);
    pointer-events: none;
  }
}

</style>
