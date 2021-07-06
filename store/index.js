export const state = () => ({
  form: {
    u_party: '14',
    u_type: '1',
    u_name: '',
    u_surname: '',
    collectiu: '',
    u_DNI: '',
    u_birthday_day: '',
    u_birthday_month: '',
    u_birthday_year: '',
    u_gender: '',
    u_address: '',
    u_city: '',
    u_postal: '',
    uacc_email: '',
    uacc_email_twice: '',
    u_mobile: '',
    u_mobile_prefix: '34',
    u_phone: '',
    u_phone_prefix: '34',
    u_bank_name: '',
    u_bank_DNI: '',
    u_fee: '37,5',
    u_aval_1: '',
    u_aval_2: '',
    verify_id_front: '',
    verify_id_back: '',
    sms_ref: '',
    sms_code: '',
    referer: 'online',
    u_lang: 'CA'
  },
  additional_form: {
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
  info: {
    collectius: [],
    sectorials: [],
    labor_codes: []
  },
  step: 1,
  errors: {},
  partySlugs: {
    2: '/mes/',
    3: '/iniciativa/',
    4: '/verds/',
    14: '/'
  },
  credentials: {
    number: '',
    token: ''
  }
})

export const mutations = {
  updateForm (state, payload) {
    state.form = { ...payload }
  },

  updateAdditionalForm (state, payload) {
    state.additional_form = { ...payload }
  },

  updateId (state, payload) {
    state.form.verify_id_front = payload.front
    state.form.verify_id_back = payload.back
  },

  updateFormField (state, payload) {
    state.form[payload.name] = payload.value
  },

  setInfo (state, payload) {
    state.info = payload
  },

  setErrors (state, payload) {
    state.errors = payload
  },

  clearErrors (state) {
    state.errors = {}
  },

  setParty (state, payload) {
    state.form.u_party = payload
  },

  setType (state, payload) {
    state.form.u_type = payload
  },

  setStep (state, payload) {
    state.step = payload
  },

  setCredentials (state, payload) {
    state.credentials.number = payload.number
    state.credentials.token = payload.token
  },

  clearError (state, payload) {
    delete state.errors[payload]
  }
}

export const actions = {
  async getInfo ({ commit }) {
    const info = await this.$api.getInfo()
    commit('setInfo', info)
  }
}
