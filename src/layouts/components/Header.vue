<template>
  <div class="header">
      Header
  </div>
</template>

<script lang='ts' setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: calc(100% - $siderWidth);

}
</style>
