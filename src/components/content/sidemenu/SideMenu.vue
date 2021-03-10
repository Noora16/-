<template>
  <div class="side-menu">
    <side-nav-bar>
      <template v-slot:userpicture><img src="~assets/img/sidemenu/user-default.png" alt=""></template>
      <template v-slot:username>立即登录</template>
    </side-nav-bar>
  </div>
</template>

<script>
import SideNavBar from './SideNavBar.vue'
export default {
  name: 'SideMenu',
  components: { 
    SideNavBar 
  }
}
</script>

<style scoped>
  
  .side-menu {
    width: 80vw;
    height: 100vh;
    position: relative;
    background-color: var(--color-background);
  }

</style>>

