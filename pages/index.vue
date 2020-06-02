<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-md-3">
          <input-radio name="afiliat" value="afiliat" />
        </div>
        <div class="col-md-3">
          <input-radio name="afiliat" value="simpatitzant" />
        </div>
      </div>
      <!-- <div class="compromis-card">
        <div class="row">
          <input-field />
        </div>
        <div class="row">
          <input-field class="col-md-6 field-error" />
          <input-field class="col-md-6" />
        </div>
        <div class="row">
          <input-field />
        </div>
      </div> -->
    </form>
  </div>
</template>

<script>/*
import InputField from '../components/InputField' */
import InputRadio from '../components/InputRadio'

export default {
  components: {
    /* InputField, */
    InputRadio
  }
}
</script>

<style lang="scss">
@import '../sass/variables';

form {
  color: $body-color;
}

.compromis-card {
  padding: 0 1rem;
}

.compromis-card {
  .row {
    border-bottom: 1px solid $gray-400;

    &:last-child {
      border: 0;
    }
  }

  .col-md-6, .col-md-3, .col-md-9 {
    border-right: 1px solid $gray-400;

    &:last-child {
      border: 0;
    }
  }
}

</style>
