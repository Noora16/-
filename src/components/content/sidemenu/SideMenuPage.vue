<template>
    <div class="side-menu-page">
      <div class="hide-side-menu" @click="hideSideMenu"></div>
      <side-menu/>
    </div>
</template>

<script>
import SideMenu from './SideMenu.vue'
export default {
  name: 'SideMenuPage',
  components: { SideMenu },
  methods: {
    hideSideMenu() {
      this.$store.commit('showSideMenu', false)
    }
  }
}
</script>

<style scoped>
  .side-menu-page {
    height: 100vh;
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
  
