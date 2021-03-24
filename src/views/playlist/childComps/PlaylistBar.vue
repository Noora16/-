<template>
  <div class="playlist-bar" v-if="tracks.length!==0">
    <div class="playlist-bar-left" @click="playAll">
      <img src="~assets/img/playlist/playred.svg" alt="">
      <span>播放全部</span>
    </div>
    <div class="playlist-bar-right">
      <img src="~assets/img/playlist/download.svg" alt="" class="download">
      <img src="~assets/img/playlist/select.svg" alt="" class="select">
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistBar",
  props: {
    tracks: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    playAll() {
      this.$store.commit('addPlaylist', this.tracks);
      this.$store.dispatch('getSong', this.tracks[0].id)
    }
  }
}
</script>

<style scoped>
  .playlist-bar {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    height: 50px;
  }
  .playlist-bar * {
    vertical-align: middle;
  }
  .playlist-bar-left img {
    width: 22px;
    margin-right: 12px;
    border-radius: 50%;
  }
  .download {
    width: 22px;
    margin-right: 12px;
  }
  .select {
    width: 20px
  }
</style>