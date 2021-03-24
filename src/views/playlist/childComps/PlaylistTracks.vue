<template>
  <div class="tracks" v-if="tracks.length!==0">
    <div v-for="(item,index) in tracks" :key="index" class="track-item">
      <div class="order">{{index+1}}</div>
      <div class="track-info" @click="playItem(item,index)">
        <p class="track-name">{{item.name}}</p>
        <p class="track-source">{{author(item)}} - {{item.al.name}}</p>
      </div>
      <div class="more-info"><img src="~assets/img/playlist/moreinfo.svg" alt=""></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlaylistTracks',
  props: {
    tracks: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    author(item) {
      return item.ar.map(x => x.name).join('/');
    },
    playItem(song, index) {
      this.$store.commit('addPlaylist', this.tracks);
      this.$store.commit('setCurrentIndex', index);
      this.$store.dispatch('getSong', song.id)
    }
  }
}
</script>

<style scoped>
  .tracks {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
  }
  .track-item {
    height: 53px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .order {
    width: 55px;
    text-align: center;
  }
  .track-info * {
    width: 270px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .track-name {
    font-size: 17px;
  }
  .track-source {
    font-size: 14.5px;
    color: #666
  }
  .more-info img {
    width: 20px;
  }
</style>