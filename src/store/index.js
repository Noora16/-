import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isShowSideMenu: false,
}

export default new Vuex.Store({
  state,
  mutations: {
    showSideMenu(state, flag) {
      state.isShowSideMenu = flag;
    }
  },
  actions: {
  },
  modules: {
  }
})
