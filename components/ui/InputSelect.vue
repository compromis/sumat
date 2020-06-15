<template>
  <div :class="{ 'field select-wrapper': true, 'empty': !value, 'inline-select': inline }">
    <label :for="name" class="sr-only">{{ label }}</label>
    <select :id="name" :name="name" :required="required" @change="(e) => $emit('input', e.target.value)">
      <option value="" hidden selected disabled>
        {{ label }}
      </option>
      <option v-for="option in options" :key="option.value" :value="option.value" :selected="value === option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: {
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
    },
    value: {
      type: [String, Number],
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
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

  &.empty select {
    color: $text-muted;
  }

  select {
    appearance: none;
    border: none;
    border-radius: 0;
    background-color: var(--white);
    font-size: $label-size;
    padding: var(--card-padding);
    padding-right: 3.25rem;
    width: 100%;
    color: $text-default;
    border-radius: $card-radius;

    &:focus {
      outline: 0;
      box-shadow: inset 0 0 0 4px var(--primary-semitransparent);
    }
  }

  &::after {
    content: ">";
    position: absolute;
    font-size: 2.25rem;
    right: 1rem;
    top: .3rem;
    font-weight: 300;
    transform: rotate(90deg);
    pointer-events: none;
  }
}

.inline-select {
  select {
    border-radius: 0;
    padding: 1.25rem var(--card-padding);
    padding-right: 3.25rem;
  }

  &::after {
    top: .45rem;
  }
}

</style>
