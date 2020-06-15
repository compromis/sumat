<template>
  <div class="container">
    <form-steps :current-step="3" />
    <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
      <form-section
        id="mes-info"
        title="Vols afegir més informació?"
      >
        <template v-slot:additional-info>
          <span class="text-muted">Tots els camps són opcionals</span>
        </template>
        <field-group>
          <input-select
            v-model="form.u_labor_code"
            name="u_labor_code"
            label="Professió"
            class="c-span-2 corner-top-left md:corner-top-right"
            :options="laborCodes"
            inline
          />
          <input-field
            v-model="form.u_labor"
            name="u_labor"
            label="Descripció..."
            class="c-span-2 corner-top-right"
            maxlength="60"
            :invalid="'u_labor' in errors"
            :invalid-message="errors['u_labor']"
          />
          <input-field
            v-model="form.u_studies"
            name="u_studies"
            label="Estudis"
            class="c-span-4"
            maxlength="70"
            :invalid="'u_studies' in errors"
            :invalid-message="errors['u_studies']"
          />
          <input-field
            v-model="form.u_union"
            name="u_union"
            label="Sindicat"
            maxlength="45"
            class="c-span-2 corner-bottom-left"
            :invalid="'u_union' in errors"
            :invalid-message="errors['u_union']"
          />
          <input-field
            v-model="form.u_movements"
            name="u_movements"
            label="Moviments culturals"
            maxlength="45"
            class="c-span-2 corner-bottom-right"
            :invalid="'u_movements' in errors"
            :invalid-message="errors['u_movements']"
          />
        </field-group>
      </form-section>
      <form-section
        id="funcionari"
        title="Ets funcionari/a?"
      >
        <input-radio-group
          v-model="isPublicEmployee"
          name="isPublicEmployee"
          label="Funcionari/a"
          label-sr-only
          block
          :options="[
            { value: 1, text: 'Sí' },
            { value: 0, text: 'No' }
          ]"
        />
        <transition name="slide">
          <field-group v-if="isPublicEmployee">
            <input-select
              v-model="form.u_public_employee"
              name="u_public_employee"
              label="Administració"
              class="c-span-2 corner-top-left corner-bottom-left md:reset-corner md:corner-top-left md:corner-top-right"
              :options="publicEmployeeOptions"
              inline
            />
            <input-select
              v-model="form.u_public_employee_cat"
              name="u_public_employee_cat"
              label="Categoria"
              :options="publicEmployeeType"
              class="c-span-1 md:reset-corner md:corner-bottom-left"
              inline
            />
            <input-select
              v-model="form.u_public_employee_type"
              name="u_public_employee_type"
              :options="publicEmployeeOptions"
              label="Tipus"
              class="c-span-1 corner-bottom-right corner-top-right md:corner-bottom-right md:reset-corner"
              inline
            />
          </field-group>
        </transition>
      </form-section>
      <submit-button :submitting="submitting">
        Adjunta informació
      </submit-button>
      <div class="text-center">
        <button class="btn-link-muted" @click="skip">
          Omet aquest pas
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import InputField from '~/components/ui/InputField'
import InputSelect from '~/components/ui/InputSelect'
import InputRadioGroup from '~/components/ui/InputRadioGroup'
import SubmitButton from '~/components/ui/SubmitButton'
import FormSteps from '~/components/blocks/FormSteps'
import FormSection from '~/components/ui/FormSection'
import FieldGroup from '~/components/ui/FieldGroup'

export default {
  components: {
    InputField,
    InputSelect,
    SubmitButton,
    FormSteps,
    FormSection,
    FieldGroup,
    InputRadioGroup
  },

  middleware ({ store, redirect }) {
    if (![2, 4].includes(store.state.step)) {
      // return redirect('/')
    }
  },

  data () {
    return {
      form: {
        u_labor_code: '',
        u_labor: '',
        u_union: '',
        u_studies: '',
        u_movements: '',
        u_public_employee: '',
        u_public_employee_cat: '',
        u_public_employee_type: '',
        sectorials: ''
      },
      submitting: false,
      isPublicEmployee: 0,
      publicEmployeeOptions: [
        { value: 1, text: 'Administració de l’Estat' },
        { value: 2, text: 'Administració autonòmica' },
        { value: 3, text: 'Administració provincial' },
        { value: 4, text: 'Administració local' },
        { value: 5, text: 'Sanitat' },
        { value: 6, text: 'Educació' },
        { value: 7, text: 'Justícia' },
        { value: 100, text: 'Altre' }
      ],
      publicEmployeeCategory: [
        { value: 'A1', text: 'A1' },
        { value: 'A2', text: 'A2' },
        { value: 'B', text: 'B' },
        { value: 'C1', text: 'C1' },
        { value: 'C2', text: 'C2' },
        { value: 'APF', text: 'APF' }
      ],
      publicEmployeeType: [
        { value: 'C', text: 'C' },
        { value: 'I', text: 'I' }
      ]
    }
  },

  computed: {
    errors () {
      return this.$store.state.errors
    },
    laborCodes () {
      return [
        { value: 0, text: 'Code 0' },
        { value: 1, text: 'Code 1' }
      ]
      // todo: map through this.$store.info.labor_codes, return [{value: obj-name, text: obj-value}]
    }
  },

  watch: {
    form: {
      handler (form) {
        this.$store.commit('updateAdditionalForm', form)
      },
      deep: true
    },

    isPublicEmployee (newValue) {
      // Reset public employee values if user changes to No
      if (newValue === 0) {
        this.form.u_public_employee = ''
        this.form.u_public_employee_cat = ''
        this.form.u_public_employee_type = ''
      }
    }
  },

  methods: {
    submit () {
      this.submitting = true
      this.$store.commit('clearErrors')

      this.$api.attachAdditionalInfo(this.$store.state.additional_form)
        .then((resp) => {
          this.$store.commit('incrementStep')
          this.$router.push({ name: 'success' })
        }).catch((resp) => {
          this.$store.commit('setErrors', resp.errors)
          // Scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }).then(() => {
          this.submitting = false
        })
    },

    skip () {
      this.$store.commit('incrementStep')
      this.$router.push({ name: 'success' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
