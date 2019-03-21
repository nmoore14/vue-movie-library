import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navDrawer: false,
    navCount: 0
  },
  mutations: {
    SET_NAVDRAWER: (state) => {
      state.navCount++
      // if (state.navDrawer === false) {
      //   state.navDrawer = !state.navDrawer
      // } else {
      //   state.navDrawer = false
      //   this.RESET_NAV()
      // }
    },
    RESET_NAV: (state) => {
      state.navDrawer = false
    }
  },
  actions: {

  }
})
