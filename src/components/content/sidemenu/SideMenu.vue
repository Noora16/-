<template>
  <div class="side-menu">
    <side-nav-bar>
      <template v-slot:userpicture><img src="~assets/img/sidemenu/user-default.png" alt=""></template>
      <template v-slot:username>立即登录</template>
    </side-nav-bar>
    <scroll class="side-wrapper" ref="scroll" :probeType="3" :pullUpLoad="true">
      <div></div>
    </scroll>
    <div class="hide-side-menu" @click="hideSideMenu"></div>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import SideNavBar from './SideNavBar.vue'
export default {
  name: 'SideMenu',
  components: { 
    SideNavBar,
    Scroll 
  },
  methods: {
    hideSideMenu() {
      this.$store.commit('showSideMenu', false)
    }
  },
}
</script>

<style scoped> 
  .side-menu {
    width: 80vw;
    height: 100vh;
    background-color: rosybrown;
    position: absolute;
    top: 0;
    z-index: 999;
  }
  .side-wrapper {
    overflow: hidden;
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .hide-side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 20vw;
    height: 100vh;
    background-color: rgba(100,100,100,0.3);
  }
</style>>

