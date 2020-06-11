<template>
  <div>
    <ul v-if="isSimpa">
      <li v-for="(step, i) in stepsSimpa" :key="i" :class="{ 'current-step' : currentStep === i || (currentStep === 3 && i === 1)}">
        <span>{{ i+1 }}</span>
        <div>{{ step }}</div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(step, i) in steps" :key="i" :class="{ 'current-step' : currentStep === i }">
        <span>{{ i+1 }}</span>
        <div>{{ step }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FormSteps',
  props: {
    currentStep: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      steps: ['Dades Personals', 'DNI/NIE', 'Signatura', 'Informació Adicional'],
      stepsSimpa: ['Dades Personals', 'Informació Adicional']
    }
  },
  computed: {
    isSimpa () {
      return this.$store.state.form.u_type === '2'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;

  .current-step {
    color: $text-default;
    span {
      background: $gradient
    }
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    color: $text-supermuted;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: $white;
    background: $gray-400;
    margin-right: .5rem;
    border-radius: 100%;
  }
}
</style>
