<template>
  <div class="recommend-playlists">
    <div class="playlist" v-for="(item,index) in playlists" :key="index" @click="showPlaylistDetail(item.id)">
      <img :src="item.picUrl" alt="">
      <span class="playCount">{{count(item)}}</span>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendPlaylist',
  props: {
    playlists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    count() {
      return function(item) {
        let x = item.playCount/10000;
        return x >= 10 ? x.toFixed(0)+'万' : x.toString()
      }
    }
  },
  methods: {
    showPlaylistDetail(id) {
      this.$router.push('/playlist/'+id)
    }
  }
}
</script>

<style scoped>
  .recommend-playlists {
    display: flex;
    justify-content: space-between;
    align-items: stretch;    
    padding: 0 20px;
    width: 150vw;
    height: 116px;
    box-shadow: 0 -3px 3px var(--color-background);
  }
  .playlist {
    flex: 1;

    position: relative;
  }
  .playCount {
    font-size: 8px;
    position: absolute;
    top: 3px;
    right: 9px;
    padding:2px;
    color: #fff;
    background-color: rgba(100,100,100,0.8);
    border-radius: 6px;
  }
  
  .playlist img {
    width: 80px;
    border-radius: 10px;
  }
  .playlist p {
    font-size: 11px;
    line-height: 1.5;
  }
</style>>

