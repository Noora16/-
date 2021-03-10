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
    <div class="playlist-info">
      <div class="playlist-cover">
        <img :src="coverImage" alt="" class="cover-img">
        <div class="play-count">
          <img src="~assets/img/playlist/play.svg" alt="" class="play-icon">
          <span>{{playCount}}</span>
        </div>
      </div>
      <div class="text-info">
        <p class="playlist-name">{{name}}</p>
        <div class="creator">
          <img :src="creatorImage" alt="">
          <span>{{creatorName}}</span>
          <span class="follow">+</span>
        </div>
        <p class="desc">{{description}}</p>
      </div>
    </div>
    <div class="count-info">
      <div>
        <img src="~assets/img/playlist/subscribe.svg">
        <span>{{subscribedCount}}</span>
      </div>
      <div>
        <img src="~assets/img/playlist/comment.svg">
        <span>{{commentCount}}</span>
      </div>
      <div>
        <img src="~assets/img/playlist/share.svg">
        <span>{{shareCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { getPlaylistDetail } from 'network/playlist.js'

export default {
  components: { NavBar },
  name: 'Playlist',
  props: {
    playlistId: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      name: '',
      coverImage: '',
      count: 0,
      description: '',
      creatorImage: '',
      creatorName: '',
      subscribedCount: 0,
      commentCount: 0,
      shareCount: 0
    }
  },
  computed: {
    playCount() {
      return this.count >= 10000 ? (this.count/10000).toFixed(0) + '万' : this.count.toString()
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getPlaylistDetail(playlistId) {
      getPlaylistDetail(playlistId).then(res => {
        this.name = res.data.playlist.name;
        this.coverImage = res.data.playlist.coverImgUrl;
        this.count = res.data.playlist.playCount;
        this.description = res.data.playlist.description;
        this.creatorImage = res.data.playlist.creator.avatarUrl;
        this.creatorName = res.data.playlist.creator.nickname;
        this.subscribedCount = res.data.playlist.subscribedCount;
        this.commentCount = res.data.playlist.commentCount;
        this.shareCount = res.data.playlist.shareCount;
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getPlaylistDetail(vm.playlistId))
    
  }
}
</script>

<style scoped>
  .search {
    float: right;
  }
  .playlist-info {
    display: flex;
    padding: 20px;
    background-color: #331900;
    color: #fff;
    height: 200px;
  }
  .playlist-cover {
    position: relative;
  }
  .cover-img {
    width: 130px;
    border-radius: 20px;
    box-shadow: 0 -5px 1px rgba(147, 128, 83, 0.5);
  }
  .play-icon {
    width: 15px;
    vertical-align: middle;
  }
  .play-count {
    background-color: rgba(100,100,100,0.5);
    position: absolute;
    top: 3px;
    right: 10px;
    padding:0 2px;
    border-radius: 6px;

  }
  .play-count span {
    font-size: 11px;
    vertical-align: middle;
  }
  .text-info {
    margin-left: 20px; 
    min-width: 0;
    overflow: hidden;
  }
  .playlist-name {
    font-size: 14px;
    line-height: 1.5;
    height: 60px;
    vertical-align: top;
  }
  .creator {
    font-size: 12px;
    color: rgba(255,255, 255, 0.8);
  }
  .creator * {
    vertical-align: middle;
  }
  .creator img {
    width: 23px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .follow {
    margin-left: 5px;
    padding: 0 10px;
    border-radius: 8px;
    background-color: rgba(255,255, 255, 0.5);
  }
  .desc {
    color: rgba(255,255, 255, 0.8);
    font-size: 12px;
    margin-top: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .count-info {  
    position: relative;
    top: -20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    height: 40px;
    width: 75%;
    margin: 0 auto;
    border-radius: 25px;
    box-shadow: 0 3px 3px rgba(100,100,100,0.5);
  }
  .count-info img {
    width: 20px;
  }
</style>