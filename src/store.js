import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navDrawer: false
  },
  mutations: {
    SET_NAVDRAWER: (state, navPayload) => {
      state.navDrawer = false
      if (navPayload !== true) {
        state.navDrawer = !state.navDrawer
      } else {
        state.navDrawer = true
      }
      console.log(navPayload)
      console.log(state.navDrawer)
    }
  },
  actions: {

  }
})
