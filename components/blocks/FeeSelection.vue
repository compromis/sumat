<template>
  <fieldset>
    <legend class="sr-only">
      Quota
    </legend>
    <div class="row fees">
      <div class="fees-wrapper">
        <span class="fee-list-label">Quota normal</span>
        <div class="fee-list fee-list-normal">
          <input-radio-button
            v-for="fee in fees.normal"
            :key="fee"
            class="d-flex"
            name="u_fee"
            :value="fee"
            :label="fee+'€'"
            :checked="value === fee"
            @input="(value) => $emit('input', value)"
          />
        </div>
        <span class="fee-list-subtitle">Cada 6 mesos</span>
      </div>
      <div class="fees-wrapper">
        <span class="fee-list-label">Quota reduïda <span class="fee-list-label-info">(estudiants, parats, jubilats)</span></span>
        <div class="fee-list fee-list-reduced">
          <input-radio-button
            v-for="fee in fees.reduced"
            :key="fee"
            class="d-flex"
            name="u_fee"
            :value="fee"
            :label="fee+'€'"
            :checked="value === fee"
            @input="(value) => $emit('input', value)"
          />
        </div>
        <span class="fee-list-subtitle">Cada 6 mesos</span>
      </div>
    </div>
  </fieldset>
</template>

<script>
import InputRadioButton from '~/components/ui/InputRadioButton'

export default {
  name: 'FeeSelection',

  components: {
    InputRadioButton
  },

  props: {
    value: {
      type: String,
      default: '14'
    },
    fees: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/variables';

fieldset {
  margin: 0;
}

label {
  margin-right: 1rem;
  font-size: 2rem;
  text-align: center;
  width: 140px;
  justify-content: center;
}

.fee-list {
  display: flex;
  margin: 1.5rem 0 .5rem 0;

  &-label {
    font-size: 1.15rem;
    margin-bottom: 1rem;

    &-info {
      font-size: .85rem;
      color: $text-muted
    }
  }
  &-subtitle {
    font-size: .85rem;
    color: $text-muted
  }
}

.fees {
  margin: 0 0 2rem 0;

  &-wrapper {
    border-right: 1px $input-border-color solid;
    margin-right: 2rem;
    padding: 0 1rem 0 0;

    &:last-child {
      border-right: 0;
    }
  }
}

@include media-breakpoint-down(md) {
  .fees {
    &-wrapper {
      padding: 0;
      border-right: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }

  .fee-list {
    flex-wrap: wrap;
    order: 3;
    margin: .75rem 0 1rem;

    label {
      font-size: 1.75rem;
      padding: .75rem;
    }

    &-label {
      order: 1;
      margin-bottom: 0;
    }

    &-subtitle {
      order: 2;
    }
  }
}

</style>
