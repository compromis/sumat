<template>
  <b-modal id="global-error" :visible="'global' in $store.state.errors" title="Error" ok-only ok-title="D'acord">
    <div class="text-danger">
      {{ $store.state.errors.global }}
    </div>
  </b-modal>
</template>

<script>
export default {

}
</script>
