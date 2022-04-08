<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" ref="hello"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineExpose } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup () {
    const hello = ref()

    onMounted(() => {
      hello.value.count()
    })
    return {
      hello
    }
  }
})
</script>
