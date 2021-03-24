<template>
  <div class="swiper-area">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in slideList" :key="index">
        <a :href="item.url" class="banner-link">
          <img :src="item.pic" class="banner-img" alt="" @load="imgLoad">
          <p class="banner-text" :style="{backgroundColor: item.titleColor}">{{item.typeTitle}}</p>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'


  export default {
    name: "RecommendSwiper",
    props: {
      slideList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        swiperOption: {
           pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          loop: true,
          initialSlide: 1
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    methods: {
      imgLoad() {
        this.$emit('swiper-img-load')
      }
    },
    directives: {
      swiper: directive
    }
  }
</script>

<style scoped>
  .swiper-area {
    padding: 10px 20px;

  }
  .banner-link {
    display: block;
  }
  .banner-img {
    border-radius: 8px;
    width: 100%;
  }
  .banner-text {
    position: absolute;
    bottom: 4px;
    right: 0;
    width: 60px;
    font-size: 12px;
    text-align: center;
    border-radius: 8px 0;
    color: #fff;
  }
  .swiper-pagination {
    position: absolute;
    top: 110px;
  }
</style>>

