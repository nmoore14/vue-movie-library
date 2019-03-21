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
    }
  },
  actions: {

  }
})
