export default {
  showSideMenu(state, flag) {
    state.isShowSideMenu = flag;
  },
  setSongData(state, song) {
    state.songData.id = song.id;
    state.songData.name = song.name;
    state.songData.artist = song.ar[0].name;
    state.songData.picUrl = song.al.picUrl;
  },
  setSongUrl(state, url) {
    state.songData.songUrl = url;
  },
  setCurrentIndex (state, index) {
    state.currentIndex = index;
  },
  addSong (state, song) {
    if (state.songList.every(item => item.id !== song.id)){
      state.songList.push(song); 
    }
  },
  addPlaylist (state, songs) {
    state.songList = [...songs];
  },
  togglePlaying (state) {
    state.playing = !state.playing;
  },
  toggleDetail (state) {
    state.showDetail = !state.showDetail;
  },
  removeAudio (state, index) {
    state.songList.splice(index, 1);
    state.playing = false;
  },
  removeList (state) {
    state.songList.splice(0, state.songList.length);
  },
  setPlayType (state) {
    if (state.playType < 3) {
      state.playType ++;
    } else {
      state.playType = 1;
    }
  },
  updateCurrentTime (state, time) {
    state.currentTime = time;
  },
  playNext (state) {
    state.currentIndex++;
    if (state.currentIndex >= state.songList.length) {
      state.currentIndex = 0;
    }
  },
  playPrev (state) { // 播放上一曲
    state.currentIndex--;
    if (state.currentIndex < 1) {
      state.currentIndex = state.songList.length - 1;
    }
  },
  
}