<template>
  <main>
    <div class="container">
      <form-steps :current-step="3" />
      <form :class="{ 'dimmed': submitting }" @submit.prevent="submit">
        <form-section id="mes-info" :title="$t('additional_info.generic.title')">
          <template v-slot:additional-info>
            <span class="text-muted">{{ $t('additional_info.generic.all_optional') }}</span>
          </template>
          <field-group>
            <input-select
              v-model="form.u_labor_code"
              name="u_labor_code"
              :label="$t('additional_info.generic.labor_code')"
              class="c-span-2 corner-top-left md:corner-top-right"
              :options="laborCodes"
              inline
            />
            <input-field
              v-model="form.u_labor"
              name="u_labor"
              :label="$t('additional_info.generic.labor')"
              class="c-span-2 corner-top-right"
              maxlength="60"
              :invalid="'u_labor' in errors"
              :invalid-message="errors['u_labor']"
            />
            <input-field
              v-model="form.u_studies"
              name="u_studies"
              :label="$t('additional_info.generic.studies')"
              class="c-span-4"
              maxlength="70"
              :invalid="'u_studies' in errors"
              :invalid-message="errors['u_studies']"
            />
            <input-field
              v-model="form.u_union"
              name="u_union"
              :label="$t('additional_info.generic.union')"
              maxlength="45"
              class="c-span-2 corner-bottom-left"
              :invalid="'u_union' in errors"
              :invalid-message="errors['u_union']"
            />
            <input-field
              v-model="form.u_movements"
              name="u_movements"
              :label="$t('additional_info.generic.movements')"
              maxlength="45"
              class="c-span-2 corner-bottom-right"
              :invalid="'u_movements' in errors"
              :invalid-message="errors['u_movements']"
            />
            <input-field
              v-model="form.u_instagram"
              name="u_instagram"
              :label="$t('additional_info.generic.instagram')"
              maxlength="100"
              class="c-span-1 corner-bottom-right"
              :invalid="'u_instagram' in errors"
              :invalid-message="errors['u_instagram']"
            />
            <input-field
              v-model="form.u_twitter"
              name="u_twitter"
              :label="$t('additional_info.generic.twitter')"
              maxlength="100"
              class="c-span-1 corner-bottom-right"
              :invalid="'u_twitter' in errors"
              :invalid-message="errors['u_twitter']"
            />
            <input-field
              v-model="form.u_facebook"
              name="u_facebook"
              :label="$t('additional_info.generic.facebook')"
              maxlength="100"
              class="c-span-1 corner-bottom-right"
              :invalid="'u_facebook' in errors"
              :invalid-message="errors['u_facebook']"
            />
            <input-field
              v-model="form.u_tiktok"
              name="u_tiktok"
              :label="$t('additional_info.generic.tiktok')"
              maxlength="100"
              class="c-span-1 corner-bottom-right"
              :invalid="'u_tiktok' in errors"
              :invalid-message="errors['u_tiktok']"
            />
          </field-group>
        </form-section>
        <form-section id="sectorials" :title="$t('additional_info.sectorials.title')">
          <field-group>
            <input-checkbox-pills v-model="form.sectorials" :options="$store.state.info.sectorials" name="sectorials" :label="$t('additional_info.sectorials.label')" class="c-span-4" />
          </field-group>
        </form-section>
        <form-section id="voluntari" :title="$t('additional_info.volunteers.title')">
          <transition name="slide">
            <field-group>
              <input-checkbox-pills v-model="form.u_volunteer" :options="volunteers" name="volunteers" :label="$t('additional_info.volunteers.label')" class="c-span-4" />
            </field-group>
          </transition>
        </form-section>
        <form-section id="funcionari" :title="$t('additional_info.public_employee.title')">
          <input-radio-group
            v-model="isPublicEmployee"
            name="isPublicEmployee"
            :label="$t('additional_info.public_employee.yesno')"
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
                :label="$t('additional_info.public_employee.department')"
                class="c-span-2 corner-top-left corner-bottom-left md:reset-corner md:corner-top-left md:corner-top-right"
                :options="publicEmployeeOptions"
                inline
              />
              <input-select
                v-model="form.u_public_employee_cat"
                name="u_public_employee_cat"
                :label="$t('additional_info.public_employee.category')"
                :options="publicEmployeeCategory"
                class="c-span-1 md:reset-corner md:corner-bottom-left"
                inline
              />
              <input-select
                v-model="form.u_public_employee_type"
                name="u_public_employee_type"
                :options="publicEmployeeTypes"
                :label="$t('additional_info.public_employee.type')"
                class="c-span-1 corner-bottom-right corner-top-right md:corner-bottom-right md:reset-corner"
                inline
              />
            </field-group>
          </transition>
        </form-section>
        <submit-button :submitting="submitting">
          {{ $t('additional_info.submit') }}
        </submit-button>
        <div class="text-center">
          <button class="btn-link-muted" @click="skip">
            {{ $t('additional_info.skip') }}
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import InputField from '~/components/ui/InputField'
import InputSelect from '~/components/ui/InputSelect'
import InputCheckboxPills from '~/components/ui/InputCheckboxPills'
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
    InputRadioGroup,
    InputCheckboxPills
  },

  async fetch ({ store }) {
    await store.dispatch('getInfo')
  },

  middleware ({ store, redirect, route }) {
    if (store.state.step !== 'additional_info' && !('override' in route.query)) {
      return redirect('/')
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
        u_tiktok: '',
        u_instagram: '',
        u_facebook: '',
        u_twitter: '',
        u_public_employee: '',
        u_public_employee_cat: '',
        u_public_employee_type: '',
        sectorials: [],
        u_volunteer: []
      },
      submitting: false,
      isPublicEmployee: 0,
      isVolunteer: 0,
      publicEmployeeOptions: [
        { value: 1, text: this.$t('additional_info.public_employee.departments.0') },
        { value: 2, text: this.$t('additional_info.public_employee.departments.1') },
        { value: 3, text: this.$t('additional_info.public_employee.departments.2') },
        { value: 4, text: this.$t('additional_info.public_employee.departments.3') },
        { value: 5, text: this.$t('additional_info.public_employee.departments.4') },
        { value: 6, text: this.$t('additional_info.public_employee.departments.5') },
        { value: 7, text: this.$t('additional_info.public_employee.departments.6') },
        { value: 100, text: this.$t('additional_info.public_employee.departments.7') }
      ],
      publicEmployeeCategory: [
        { value: 'A1', text: 'A1' },
        { value: 'A2', text: 'A2' },
        { value: 'B', text: 'B' },
        { value: 'C1', text: 'C1' },
        { value: 'C2', text: 'C2' },
        { value: 'APF', text: 'APF' }
      ],
      publicEmployeeTypes: [
        { value: 'C', text: this.$t('additional_info.public_employee.types.C') },
        { value: 'I', text: this.$t('additional_info.public_employee.types.I') }
      ]
    }
  },

  computed: {
    errors () {
      return this.$store.state.errors
    },
    laborCodes () {
      return Object.entries(this.$store.state.info.labor_codes).map(([value, text]) => ({ value, text }))
    },
    volunteers () {
      const field = this.$i18n.locale === 'cas' ? 'volunteers_cas' : 'volunteers'
      return Object.entries(this.$store.state.info[field]).map(([id, name]) => ({ id, name }))
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

      this.$api.attachAdditionalInfo(this.$store.state.additional_form, this.$store.state.credentials)
        .then(() => {
          this.$store.commit('setStep', 'success')
          this.$router.push({ name: 'success___' + this.$i18n.locale })
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
      this.$store.commit('setStep', 'success')
      this.$router.push({ name: 'success___' + this.$i18n.locale })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
