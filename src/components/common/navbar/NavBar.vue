<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    font-size: 19px;
    color: #fff;
    background-color: var(--color-red);
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
    text-align: center;
  }
  .nav-bar img {
    width: 40px;
    height: 30px;
    vertical-align: middle;
  }
  .center {
    flex: 1;
  }
</style>
