<template>
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 459.86 142.61"
    xml:space="preserve"
  >
    <g :class="{ mono }">
      <path class="cls-1" d="M302.86,142.61h-33.67L296.82,0h0c17.46,0,30.58,15.91,27.27,33.05l-21.22,109.56Z" />
      <path class="cls-1" d="M370.46,142.61h-33.67L364.41,0h0c17.46,0,30.58,15.91,27.27,33.05l-21.22,109.56Z" />
      <path class="cls-1" d="M438.13,142.61h-33.67L432.08,0h0c17.46,0,30.58,15.91,27.27,33.05l-21.22,109.56Z" />
      <path class="cls-1" d="M.03,95.75H33.06c-.38,13.97,10.38,19.44,25.29,19.44,11.14,0,21.71-3.59,21.71-14.53,0-7.93-8.12-11.51-26.61-18.12-24.16-8.49-39.45-17.18-39.45-39.07C14,15.53,35.71,.81,65.72,.81c26.24,0,53.23,10.19,51.91,41.53h-32.09c.19-10.57-7.55-16.42-20.95-16.42-8.49,0-18.69,3.4-18.88,12.83,0,8.12,7.36,10,28.88,17.37,22.84,7.93,39.07,17.55,39.07,39.83,0,30.58-25.67,45.49-56.25,45.49S-1.1,129.73,.03,95.75Z" />
      <path class="cls-1" d="M128.77,82.63C128.96,38.84,156.33,.71,201.25,.71c36.05,0,59.83,22.46,59.83,60.02,0,42.85-26.61,80.6-71.54,80.79-34.92,0-60.97-20.76-60.78-58.89Zm98.91-21.52c0-18.88-7.93-33.6-27.93-33.6-26.8,.19-37.56,30.2-37.56,54.74,0,17.74,7.93,32.28,28.31,32.28,26.8,0,37.18-29.26,37.18-53.42Z" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    mono: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .cls-1 {
    fill: #2D2A26;
  }

  .mono {
    .cls-1 {
      fill: currentColor;
    }
  }
</style>
