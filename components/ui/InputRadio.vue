<template>
  <label class="btn label btn-lg" :for="value"> <span>{{ value }}</span>
    <p>Com a adherit/adherida tindràs tots els drets i deures recollits en les bases de la Coalició Compromís. </p>
    <input
      :id="value"
      :type="type"
      :name="name"
      :value="value"
      class="input"
    >
    <span class="checkmark" />
  </label>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      default: 'radio'
    },
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

.label {
  text-align: left;
  font-size: 1.25rem;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  p {
    font-size: 1rem;
  }
}

.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  height: 20px;
  width: 20px;
  border: 1px solid $gray-700;
  border-radius: 50%;
}

.label input:checked ~ .checkmark {
  border-color: blue;
}

input:checked {
  .label {
    background: green;
  }
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.label input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  content: '';
  width: 8px;
  height: 8px;
  background: blue;
  position: relative;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  border-color: blue;
  transform: translate(-50%, -50%);
}

</style>
