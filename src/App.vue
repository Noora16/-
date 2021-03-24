<template>
  <div id="app">
    <div :disabled="isShowSideMenu">
      <router-view/>
      <main-tab-bar v-show="this.$route.path.indexOf('song')===-1&&this.$route.path.indexOf('playlist')===-1"/>
      <player-bar/>
    </div>
    <router-view name="sidebar" v-show="isShowSideMenu" class="sidebar"/>
    
  </div>
  
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
import PlayerBar from 'components/content/player/PlayerBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar,
    PlayerBar
  },
  computed: {
    isShowSideMenu() {
      return this.$store.state.isShowSideMenu;
    }
  },
};
</script>

<style>
  @import url('assets/css/base.css');

</style>