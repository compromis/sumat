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
    u_bank_name: '',
    u_bank_DNI: '',
    u_fee: '37,5',
    verify_id_front: '',
    verify_id_back: '',
    sms_ref: '',
    sms_code: ''
  },
  additional_form: {
    u_studies: ''
  },
  info: {
    collectius: [],
    sectorials: [],
    labor_codes: []
  },
  step: 1,
  errors: {},
  partySlugs: {
    2: '/bloc/',
    3: '/iniciativa/',
    4: '/verds/',
    14: '/'
  },
  partiesFromSlug: {
    bloc: '2',
    iniciativa: '3',
    verds: '4',
    compromis: '14'
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

  setParty (state, payload) {
    state.form.u_party = payload
  },

  setType (state, payload) {
    state.form.u_type = payload
  },

  setPartyFromSlug (state, payload) {
    state.form.u_party = (payload) ? state.partiesFromSlug[payload] : '14'
  },

  setTypeFromSlug (state, payload) {
    state.form.u_type = (payload === 'simpatitzant') ? '2' : '1'
  },

  incrementStep (state) {
    state.step++
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
