<template>
  <fieldset :id="id">
    <legend :class="{'sr-md-only': titleHidden}">
      <span>
        {{ title }}
      </span>
      <span v-if="help" v-tooltip.right="help">
        <b-icon-question-circle font-scale="0.5" class="ml-2" />
      </span>
      <div class="additional-info">
        <slot name="additional-info" />
      </div>
    </legend>
    <slot />
  </fieldset>
</template>

<script>
import { BIconQuestionCircle } from 'bootstrap-vue'

export default {
  name: 'FormSection',

  components: {
    BIconQuestionCircle
  },

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
    },

    help: {
      type: String,
      default: ''
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
  display: flex;
  align-items: center;
}

.additional-info {
  margin-left: auto;
  font-size: .85rem;
  font-weight: normal;
}
</style>
