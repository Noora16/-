<template>
  <div v-if="songList.length && this.$route.path.indexOf('song')===-1">
    <div class="player-bar" :class="{higher:isMainPage}" @click="toSong">
      <audio 
        :src="songData.songUrl" ref="audio" @ended="next"></audio>
      <div class="play-bar-left">
        <img :src="songData.picUrl" alt="" class="song-cover">
        <span class="song-name">{{songData.name}}</span>
        <span class="song-artist"> - {{songData.artist}}</span>
      </div>
      <div class="play-bar-right">
        <img v-show="!isPlay" src="~assets/img/player/play.svg" alt="" @click.stop="toggle">
        <img v-show="isPlay" src="~assets/img/player/pause.svg" alt="" @click.stop="toggle">
        <img src="~assets/img/player/playlist.svg" alt="" @click.stop="togglePlaylist">
      </div>
    </div>
    <current-playlist v-show="isPlaylistShow" @hide-playlist="togglePlaylist"/>
  </div>
  
</template>

<script>
import CurrentPlaylist from './CurrentPlaylist.vue';
export default {
  components: { CurrentPlaylist },
  name: "PlayerBar",
  data() {
    return {
      isPlaylistShow: false
    }
  },
  computed: {
    isMainPage() {
      return this.$route.path.indexOf('playlist') === -1
    },
    isPlay() {
      return this.$store.state.playing;
    },
    songData() {
      return this.$store.state.songData;
    },
    songList() {
      return this.$store.state.songList;
    },
    playType() {
      return this.$store.state.playType;
    }
  },
  methods: {
    toggle() { 
      this.$store.commit('togglePlaying');
      if(this.isPlay && this.$refs.audio.readyState === 4){
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    next() {
      switch (this.playType) {
        case 1:
          this.$store.commit('playNext');
          this.$store.dispatch('getSong', this.songList[this.currentIndex+1]);
        break;
        case 2:
          let value = Math.floor(Math.random() * (this.songList.length));
          this.$store.commit('setCurrentIndex', value);
          this.$store.dispatch('getSong', this.songList[value]);
        break;
        case 3:
        break;
      }
    },
    togglePlaylist() {
      this.isPlaylistShow = !this.isPlaylistShow
    },
    toSong() {
      this.$router.push(`/song/${this.songData.id}`)
    }

  }

}
</script>

<style scoped>
  .player-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    z-index: 999;
    background-color: #fff;
  }
  .higher {
    transform: translateY(-49px);
  }
  .player-bar * {
    vertical-align: middle;
  }
  .play-bar-left {
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .song-cover {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .play-bar-right img {
    width: 33px;
    margin-left: 18px;
  }
  .song-name {
    font-size: 14px;
  }
  .song-artist {
    font-size: 12px;
    color: #666
  }
</style>