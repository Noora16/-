<template>
  <div class="discover">
    <nav-bar>
      <template v-slot:left><img src="~assets/img/discover/more.png" alt=""  @click="showSideMenu"></template>
      <template v-slot:center><input type="search" name="search" class="search-box" @click="toSearch" placeholder="搜索歌曲/歌手/歌单/电台"></template>
      <template v-slot:right><img src="~assets/img/discover/voice.svg" alt="" class="voice"></template>
    </nav-bar>
    <scroll :class="length>0?'wrapper2':'wrapper1'" ref="scroll" :probeType="3" :pullUpLoad="true">
      <div class="content">
        <recommend-swiper :slideList="slideList" @swiper-img-load="imgLoad"/>
        <scroll :scrollX="true" class="ball-scroll">
          <discover-bar :ball="ball" @bar-img-load="imgLoad"/>
        </scroll>
        <div class="title">
          <h1>推荐歌单</h1>
          <p>更多</p>
        </div>
        <scroll :scrollX="true" class="playlists-scroll">
          <recommend-playlist :playlists="playlists" @playlist-img-load="imgLoad"/>
        </scroll>
        <div class="title">
          <h1>私人定制</h1>
          <p>更多</p>
        </div>
        <scroll :scrollX="true" :probeType="3" class="songs-scroll">
          <recommend-song :songs="recommendSongs" @songs-img-load="imgLoad"/>
        </scroll>
      </div>
    </scroll>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import RecommendSwiper from './childComps/RecommendSwiper.vue'
import DiscoverBar from './childComps/DiscoverBar.vue'
import RecommendPlaylist from './childComps/RecommendPlaylist.vue' 
import RecommendSong from './childComps/RecommendSong.vue'
import { getBannerData, getBallData, getPlaylistsData, getRecommendSong } from 'network/discover.js'






export default {
  name: 'Discover',
  components: {
    NavBar,
    RecommendSwiper,
    DiscoverBar,
    Scroll,
    RecommendPlaylist,
    RecommendSong,
  },
  data() {
    return {
      slideList: [],
      ball: [],
      playlists: [],
      recommendSongs: []
    }
  },
  computed: {
    length() {
      return this.$store.state.songList.length
    }
  },
  watch: {
    length() {
      this.$refs.scroll.refresh();
    }
  },
  methods: {
    toSearch() {
      this.$router.push('/search')
    },
    showSideMenu() {
      this.$store.commit('showSideMenu', true)
    },
    getBannerData(type) {
      getBannerData(type).then(res => {
        this.slideList = res.data.banners;
      })
    },
    getBallData() {
      getBallData().then(res => {
        this.ball = res.data.data;
      })
    },
    getPlaylistsData(limit) {
      getPlaylistsData(limit).then(res => {
        this.playlists = res.data.result;
      })
    },
    getRecommendSong(limit) {
      getRecommendSong(limit).then(res => {
        this.recommendSongs = res.data.result;
      })
    },
    imgLoad() {
      this.$refs.scroll.refresh();
    }
  },
  created() {
    this.getBannerData(2),
    this.getBallData(),
    this.getPlaylistsData(6),
    this.getRecommendSong(12)
  },
  
}
    
</script>

<style scoped>
  .search-box {
    border-radius: 15px;
    border: none;
    height: 30px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    background-image: url('~assets/img/discover/search.svg');
    background-repeat: no-repeat;
    background-position: 5% 50%;
    background-size: 22px;
  }
  .voice {
    width: 30px;
  }

  .ball-scroll .songs-scroll .playlists-scroll {
    overflow: hidden;
    width: 100vw;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
  }
  .title h1 {
    font-size: 17px;
    text-align: left;
    margin: 0;
  }
  .title p {
    font-size: 12px;
    border: 1px solid var(--color-background);
    padding: 3px 6px;
    border-radius: 9px;
  }
  .title p::after {
    content:">"
  }

  .wrapper1 {
    overflow: hidden;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .wrapper2 {
    overflow: hidden;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 98px;
  }

</style>

