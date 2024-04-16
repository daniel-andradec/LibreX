export default {
  state: { // data
      user: {
          id: null,
          name: null,
          email: null,
          role: null
      }
  },
  mutations: { // methods to change state
      setUser(state, payload) {
          state.user = payload
      },
      doLogout(state) {
          state.user = {
              id: null,
              name: null,
              email: null,
              role: null
          }

          localStorage.removeItem('user')
      }
  },
  actions: { // methods to call mutations
      setUser({ commit }, payload) {
          commit('setUser', payload)
      },
      doLogout({ commit }) {
          commit('doLogout')
      }
  },
  getters: { // return state
      loggedInUser: state => state.user
  }
}