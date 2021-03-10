<template>
  <tab-bar>
    <tab-bar-item path="/discover">
      <template v-slot:item-icon-active><img src="~assets/img/maintabbar/discover2.png" alt=""></template>
      <template v-slot:item-icon><img src="~assets/img/maintabbar/discover1.png" alt=""></template>
      <template v-slot:item-text><p>发现</p></template>
    </tab-bar-item>
    <tab-bar-item path="/podcast">
      <template v-slot:item-icon-active><img src="~assets/img/maintabbar/podcast2.png" alt=""></template>
      <template v-slot:item-icon><img src="~assets/img/maintabbar/podcast1.png" alt=""></template>
      <template v-slot:item-text><p>播客</p></template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon-active><img src="~assets/img/maintabbar/profile2.png" alt=""></template>
      <template v-slot:item-icon><img src="~assets/img/maintabbar/profile1.png" alt=""></template>
      <template v-slot:item-text><p>我的</p></template>
    </tab-bar-item>
    <tab-bar-item path="/karaoke">
      <template v-slot:item-icon-active><img src="~assets/img/maintabbar/karaoke2.png" alt=""></template>
      <template v-slot:item-icon><img src="~assets/img/maintabbar/karaoke1.png" alt=""></template>
      <template v-slot:item-text><p>K歌</p></template>
    </tab-bar-item>
    <tab-bar-item path="/friends">
      <template v-slot:item-icon-active><img src="~assets/img/maintabbar/friends2.png" alt=""></template>
      <template v-slot:item-icon><img src="~assets/img/maintabbar/friends1.png" alt=""></template>
      <template v-slot:item-text><p>云村</p></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
