<template>
  <div id="app">
    <div class="main" :disabled="isShowSideMenu">
      <router-view/>
      <main-tab-bar/>
    </div>
    <side-menu-page v-show="isShowSideMenu"/>
  </div>
  
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
import SideMenuPage from 'components/content/sidemenu/SideMenuPage.vue';

export default {
  name: 'App',
  components: {
    MainTabBar,
    SideMenuPage,
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