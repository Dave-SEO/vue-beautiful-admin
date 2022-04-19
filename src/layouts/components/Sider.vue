<template>
  <div class="sidebar-container">
    Sider
  </div>
</template>

<script lang='ts' setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.sidebar-container{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: $siderWidth;
    background-color: $siderBg;
    overflow: hidden;
}
</style>
