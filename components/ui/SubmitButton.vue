<template>
  <div class="text-center my-4">
    <button type="submit" class="btn btn-primary btn-xl font-weight-bold" :disabled="submitting">
      <span v-if="submitting">
        <b-icon-circle-fill animation="throb" />
      </span>
      <span v-else>
        <slot />
      </span>
    </button>
  </div>
</template>

<script>
import { BIconCircleFill } from 'bootstrap-vue'

export default {
  components: {
    BIconCircleFill
  },

  props: {
    submitting: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 240px;
  max-width: 100%;
}
</style>
