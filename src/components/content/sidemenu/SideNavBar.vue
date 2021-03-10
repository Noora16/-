<template>
  <div class="side-nav-bar">
    <div class="user-info">
      <div class="user-picture"><slot name="userpicture"></slot></div>
      <div class="user-name"><slot name="username"></slot></div>
    </div>
    <div class="scan"><img src="~assets/img/sidemenu/scan.svg"></div>
  </div>
</template>

<script>
export default {
  name: 'SideNavBar',

}
</script>

<style scoped>
  .side-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: var(--color-red);
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .user-name {
    color: #fff;
    font-size: 17px;
    padding-left: 8px;
    line-height: 50px;
  }
  .user-name::after {
    content: " >";
  }
  .user-picture img {
    border-radius: 50%;
    width: 28px;
  }
  .scan img {
    width: 28px;
    height: 25px;
  }
</style>>
