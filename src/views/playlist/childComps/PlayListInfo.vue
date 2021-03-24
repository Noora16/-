<template>
  <div v-if="Object.keys(playlistInfo).length!==0">
    <div class="playlist-info">
      <div class="playlist-cover">
        <img :src="playlistInfo.coverImage" alt="" class="cover-img" @load="coverImgLoad">
        <div class="play-count">
          <img src="~assets/img/playlist/play.svg" alt="" class="play-icon">
          <span>{{playCount}}</span>
        </div>
      </div>
      <div class="text-info">
        <p class="playlist-name">{{playlistInfo.name}}</p>
        <div class="creator">
          <img :src="playlistInfo.creatorImage" alt="" @load="creatorImgLoad">
          <span>{{playlistInfo.creatorName}}</span>
          <span class="follow">+</span>
        </div>
          <p class="desc">{{playlistInfo.description}}</p>
      </div>
    </div>
    <div class="count-info">
      <div>
        <img src="~assets/img/playlist/subscribe.svg">
        <span>{{playlistInfo.subscribedCount}}</span>
      </div>
      <div>
        <img src="~assets/img/playlist/comment.svg">
        <span>{{playlistInfo.commentCount}}</span>
      </div>
      <div>
        <img src="~assets/img/playlist/share.svg">
        <span>{{playlistInfo.shareCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistInfo',
  props: {
    playlistInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    coverImgLoad() {
      this.$emit('cover-img-load')
    },
    creatorImgLoad() {
      this.$emit('creator-img-load')
    }
  },
  computed: {
    playCount() {
      return this.playlistInfo.count >= 10000 ? (this.playlistInfo.count/10000).toFixed(0) + '万' : this.playlistInfo.count.toString()
    }
  },

    
}
</script>

<style scoped>
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
    height: 130px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .playlist-name {
    font-size: 14px;
    line-height: 1.5;
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
    margin: 0 auto -18px auto;
    border-radius: 25px;
    box-shadow: 0 3px 3px rgba(100,100,100,0.5);
    font-size: 13px;
  }
  .count-info img {
    width: 18px;
    margin-right: 6px;
  }
  .count-info * {
    vertical-align: middle;
  }
</style>

