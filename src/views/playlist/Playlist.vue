<template>
  <div class="playlist">
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/playlist/back.svg" alt="" @click="goBack">
      </template>
      <template v-slot:center>
        <span>歌单</span>
        <img src="~assets/img/playlist/search.svg" alt="" class="search">
      </template>
      <template v-slot:right>
        <img src="~assets/img/playlist/more.svg" alt="">
      </template>
    </nav-bar>
    <scroll ref="scroll" :class="length>0?'wrapper2':'wrapper1'">
      <div class="content">
        <play-list-info @cover-img-load="imgLoad" @creator-img-load="imgLoad" :playlistInfo="playlistInfo"/>
        <playlist-bar :tracks="playlistInfo.tracks"/>
        <playlist-tracks :tracks="playlistInfo.tracks"/>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import PlayListInfo from './childComps/PlayListInfo.vue'
import PlaylistBar from './childComps/PlaylistBar.vue'
import PlaylistTracks from './childComps/PlaylistTracks.vue'
import { getPlaylistDetail, PlaylistInfo } from 'network/playlist.js'

export default {
  name: 'Playlist',
  components: {
    NavBar,
    Scroll,
    PlayListInfo,
    PlaylistBar,
    PlaylistTracks,
  },
  data() {
    return {
      playlistInfo: {},
    }
  },
  computed: {
    length() {
      return this.$store.state.songList.length
    }
  },
  watch: {
    length() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
    this.getPlaylistDetail(this.$route.params.playlistId)
  },
  methods: {
    getPlaylistDetail(playlistId) {
      getPlaylistDetail(playlistId).then(res => {
        this.playlistInfo = new PlaylistInfo(res.data.playlist);
      })
    },
    goBack() {
      this.$router.back();
    },
    imgLoad() {
      this.$refs.scroll.refresh();
    }
  }
}
</script>

<style scoped>
  .search {
    float: right;
  }
  .playlist {
    height: 100vh;
    position: relative;
    z-index: 999;
  }
  .wrapper1 {
    overflow: hidden;
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .wrapper2 {
    overflow: hidden;
    position: absolute;
    top: 50px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>