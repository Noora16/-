import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  isShowSideMenu: false,
  songData: {
    id: 0,
    name: '歌曲名称',
    artist: '歌手',
    picUrl: '~assets/img/player/playbar.svg',
    songUrl: '',
  },
  
  songList: [],
  playType: 1,
  showDetail: false,
  currentIndex: -1,
  playing: false,
  currentTime: 0,
  durationTime: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
