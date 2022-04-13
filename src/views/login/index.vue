<template>
    <div class="login-wrap">
        <el-row>
            <el-col :span="14"></el-col>
            <el-col :span="10" class="login-col">
                <div class="login">
                    <h1 class="login-title">administrator</h1>
                    <el-form>
                        <el-form-item>
                            <el-input type="text" v-model="state.userName" :prefix-icon="User" size="large"
                                placeholder="请输入用户名" />
                        </el-form-item>
                        <el-form-item>
                            <el-input type="password" v-model="state.pwd" :prefix-icon="Lock" size="large" show-password
                                placeholder="请输入密码" />
                        </el-form-item>
                        <el-button type="primary" round class="btn-login" size="large">登陆</el-button>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
const state = reactive({
    userName: '',
    pwd: ''
})
</script>

<style lang="scss" scoped>
$light: #fff;

.login-wrap {
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/images/bg.jpg");
    position: relative;
    background-size: cover;

    :deep(.el-row) {
        width: 100vw;
        height: 100vh;
    }

    .login {
        width: 400px;
        padding: 40px 60px;
        box-sizing: border-box;
        background-image: url("@/assets/images/bg1.png");
        background-size: cover;
        border-radius: 15px;

        :deep(input) {
            text-indent: 10px;
        }

        .login-title {
            color: $light;
        }
    }

    .login-col {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-login {
        width: 100%;
    }
}
</style>
