<template>
  <div class="header">
      <div class="navbar">
        <div class="left"></div>
        <div class="right">
          <el-dropdown>
            <el-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="avatar"/>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="methods.logout">退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
  </div>
</template>

<script lang='ts' setup>
import {} from 'vue'
import { userStore } from '@/store'
import { useRouter } from 'vue-router'
const store = userStore()
const router = useRouter()
const methods = {
  logout() {
    store.logout()
    router.push('/login')
  }
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: calc(100% - $siderWidth);
    .navbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      overflow: hidden;
      position: relative;
      background: #fff;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
      padding: 0 20px;
      box-sizing: border-box;
      .right{
        .avatar{
          cursor: pointer;
        }
      }
    }
}
</style>
