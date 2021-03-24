<template>
  <div class="recommend-song">
    <div v-for="(item,index) in songs" :key="index" class="song-item" @click="playRecommendSong(item,index)">
      <div class="left">
        <img :src="item.picUrl" alt="" class="cover">
        <img src="~assets/img/discover/play2.svg" alt="" class="play-icon">
      </div>
      <div class="song-info">
        <span class="song-name">{{item.name}}</span>
        <span class="song-artist"> - {{getArtist(item)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendSong',
  props: {
    songs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getArtist(item) {
      return item.song.artists.map(x => x.name).join('/')
    },
    playRecommendSong(song, index) {
      this.$store.commit('addPlaylist', this.songs);
      this.$store.commit('setCurrentIndex', index);
      this.$store.dispatch('getSong', song.id)
    }
  }
}
</script>

<style scoped>
  .recommend-song {
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 370vw;
    align-items: flex-start;
    gap: 0 10px;
    justify-items: start;
  }
  .song-item {
    display: flex;
    align-items: center;
    width: 90%;
  }
  .left {
    position: relative;
    width: 58px;
  }
  .cover {
    width: 48px;
    border-radius: 10px;
  }
  .play-icon {
    width: 20px;
    position: absolute;
    top: 13px;
    left: 14px
  }
  .song-info {
    flex: 1;
  
  }
  .song-name {
    font-size: 16px;
  }
  .song-artist {
    font-size: 13px;
    color: #666;
     text-overflow: ellipsis;
  }
</style>