import { getSongData, getSongUrl } from 'network/song.js'

export default {
  getSong({ commit }, id) {
    if(id) {
      getSongData(id).then(res => {
        let song = res.data.songs[0];
        commit('setSongData', song);
      }).catch(err => console.log('错误信息: '+ err));
      getSongUrl(id).then(res => {
        let url = res.data.data[0].url;
        commit('setSongUrl', url);
      }).catch(err => console.log('错误信息: '+ err))
    }
  }
}