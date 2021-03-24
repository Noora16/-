<template>
  <div class="discover-bar">
    <div v-for="(item,index) in ball" :key="index" class="discover-bar-item">
      <a :href="item.url">
        <img :src="item.iconUrl" alt="" @load="imgLoad">
        <p>{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverBar",
  props: {
    ball: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('bar-img-load')
    }
  }
}
</script>

<style scoped>
  .discover-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 8px;
    border-bottom: 1px solid var(--color-background);
    width: 130vw;
  }
  .discover-bar-item {
    flex: 1;
    text-align: center;
  }
  .discover-bar-item img {
    width: 38px;
    background-color: var(--color-red);
    border-radius: 50%;
  }
  .discover-bar-item p {
    font-size: 11px;
  }

</style>

