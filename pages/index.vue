<template>
  <div class="container">
    <form>
      <div class="card">
        <input-field />
      </div>
    </form>
  </div>
</template>

<script>
import InputField from '../components/InputField'

export default {
  components: {
    InputField
  }
}
</script>

<style lang="scss">
@import '../sass/variables';

form {
  color: $body-color;
}

</style>
