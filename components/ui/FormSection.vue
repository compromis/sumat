<template>
  <fieldset :id="id">
    <legend :class="{'sr-md-only': titleHidden}">
      <span>
        {{ title }}
      </span>
      <span v-if="help" v-tooltip="{ content: help, trigger: 'hover click focus' }" tabindex="0" role="button">
        <b-icon-question-circle font-scale="0.75" class="ml-2" />
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
@import '../../sass/variables';

fieldset {
  margin: 2.5rem 0;
}

legend {
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: -.02em;
  display: flex;
  align-items: center;
  line-height: 1;
}

.additional-info {
  margin-left: auto;
  font-size: .85rem;
  font-weight: normal;
}

@include media-breakpoint-down(sm) {
  .additional-info button {
    text-align: right;
  }
}
</style>
