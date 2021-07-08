<template>
  <fieldset>
    <legend class="sr-only">
      {{ $t('fees.fee') }}
    </legend>
    <div class="row fees">
      <div class="fees-wrapper">
        <span id="quotaNormalLabel" class="fee-list-label">{{ !youth ? $t('fees.normal') : $t('fees.over18') }}</span>
        <div class="fee-list fee-list-normal">
          <input-radio-button
            v-for="fee in fees.normal"
            :key="fee"
            class="d-flex"
            name="u_fee"
            :value="fee"
            :label="fee+'€'"
            :checked="value === fee"
            aria-describedby="quotaNormalLabel quotaNormalFreq"
            @input="(value) => $emit('input', value)"
          />
        </div>
        <span id="quotaNormalFreq" class="fee-list-subtitle">{{ $t('fees.biannual') }}</span>
      </div>
      <div class="fees-wrapper">
        <span id="quotaReduidaLabel" class="fee-list-label">{{ !youth ? $t('fees.reduced') : $t('fees.under18') }} <span v-if="!youth" class="fee-list-label-info">{{ $t('fees.reducedinfo') }}</span></span>
        <div class="fee-list fee-list-reduced">
          <input-radio-button
            v-for="fee in fees.reduced"
            :key="fee"
            class="d-flex"
            name="u_fee"
            :value="fee"
            :label="fee+'€'"
            :checked="value === fee"
            aria-describedby="quotaReduidaLabel quotaReduidaFreq"
            @input="(value) => $emit('input', value)"
          />
        </div>
        <span id="quotaReduidaFreq" class="fee-list-subtitle">{{ $t('fees.biannual') }}</span>
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
      default: () => ({ normal: [], reduced: [] })
    },

    youth: {
      type: Boolean,
      default: false
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
  font-size: 1.75rem;
  text-align: center;
  width: 120px;
  justify-content: center;
}

.fee-list {
  display: flex;
  margin: 1rem 0 .5rem 0;

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
  margin: 0 0 1rem 0;

  &-wrapper {
    border-right: 1px $input-border-color solid;
    margin-right: 2rem;
    padding: 0 1rem 0 0;

    &:last-child {
      border-right: 0;
      margin-right: 0;
      padding-right: 0;
    }
  }
}

@include media-breakpoint-down(md) {
  .fees {
    margin-bottom: 0;

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
