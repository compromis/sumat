<template>
  <fieldset>
    <legend class="sr-only">
      {{ label }}
    </legend>
    <ul class="pill-list">
      <li v-for="option in options" :key="option.id" class="pill" :class="{'checked' : value.includes(option.id)}">
        <label :for="name + option.id">
          <input :id="name + option.id" v-model="sectorials" :name="name" type="checkbox" :value="option.id">
          <span>{{ option.name }}</span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {
  name: 'InputCheckboxPills',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      sectorials: []
    }
  },
  watch: {
    sectorials (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.pill-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  .pill {
    box-shadow: inset 0 0 0 1px var(--gray-400);
    border-radius: 2rem;
    padding: .4rem 1rem;
    white-space: nowrap;
    font-size: 0.9rem;
    margin: .25rem .5rem .25rem 0;
    cursor: pointer;

    &:hover {
      background: var(--gray-100);
      text-decoration: none;
    }

    &.checked {
      box-shadow: none;
      background: $gradient;
      color: $white;
    }

    &:focus-within {
      box-shadow: inset 0 0 0 1px var(--primary), 0 0 0 3px var(--primary-semitransparent);
    }
  }
}

fieldset {
  background: var(--white);
  padding: var(--card-padding);
}

label {
  text-align: left;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin-bottom: 0;

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
  }
}

</style>
