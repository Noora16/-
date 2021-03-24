<template>
  <div class="current-playlist-page" v-if="songList.length">
    <div class="back" @click="hidePlaylist"></div>
    <div class="current-playlist">
      <div class="current-bar">
        <span class="title">当前播放</span>
        <span class="length">({{songList.length}})</span>
        <div class="options">
          <div class="circle">
            <img src="~assets/img/player/circle.svg" alt="">
            <span> 列表循环</span>
          </div>
          <div class="collect">
            <img src="~assets/img/player/collect.svg" alt="">
            <span> 收藏全部</span>
          </div>
          <div class="clear" @click="removeList">
            <img src="~assets/img/player/clear.svg" alt="">
          </div>
        </div>
      </div>
      <scroll ref="scroll" class="list-wrapper">
        <ul>
          <li v-for="(item,index) in songList" :key="index" class="playlist-song">
            <div class="songs-info" @click="toggleSong(item.id,index)">
              <span>{{item.name}}</span>
              <span class="artist-name"> - {{author(item)}}</span>
            </div>
            <div class="delete" @click="removeSong(index)">
              <img src="~assets/img/player/delete.svg" alt="">
            </div>
          </li>
        </ul>
      </scroll>
      
   

    </div>
  </div>

</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue';
export default {
  components: { Scroll },
  name: 'CurrentPlaylist',
  computed: {
    songList() {
      return this.$store.state.songList
    }
  },
  methods: {
    author(item) {
      return item.ar ? item.ar.map(x => x.name).join('/') : item.song.artists.map(x => x.name).join('/');
    },
    hidePlaylist() {
      this.$emit('hide-playlist')
    },
    toggleSong(id, index) {
      this.$store.dispatch('getSong', id);
      this.$store.commit('setCurrentIndex', index);
    },
    removeSong(index) {
      this.$store.commit('removeAudio', index);
    },
    removeList() {
      this.$store.commit('removeList')
    },
  },
}
</script>

<style scoped>
  .current-playlist-page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
  }
  .current-playlist {
    position: fixed;
    left: 20px;
    right: 20px;
    bottom: 20px;
    top: 200px;
    z-index: 999;
    background-color: #fff;
    border-radius: 20px;
    padding: 18px;
    font-size: 16px;
    overflow: hidden;
  }
  .title {
    font-weight: 700;
    font-size: 20px;
  }
  .length {
    font-size: 14px;
    color:  #666
  }
  .current-playlist img {
    width: 18px;
  } 
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 15px;
  }
 
  .circle {
    width: 100px;
  }
  .playlist-song {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    height: 40px;
  }
  .artist-name {
    color: #666;
    font-size: 13px;
  }
  .songs-info {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .list-wrapper {
    height: 350px;
    overflow: hidden;
  }
  ul {
    overflow: hidden;
  }
  .back {
    height: 200px;
  }
</style>