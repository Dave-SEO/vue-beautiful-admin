<template>
  <div class="container">
      <router-view></router-view>
  </div>
</template>

<script lang='ts' setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.container{
  position: relative;
    width: 100%;
    min-height: calc(100vh - 93px);
    padding: 104px 20px 20px 20px;
    box-sizing: border-box;
}
</style>
