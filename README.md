# admin
# 介绍
## 目录结构

```sh
├── .husky                     # git 钩子函数配置
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layouts                # 全局 layouts
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .cz-config.js              # git cz 配置模版
├── .commitlint.config.js      # 检查git提交描述是否符合规范要求
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json eslint 配置项
```
# 编程规范（eslint 校验及 git 提交）
## eslint 配置

``` JavaScript
 "eslintConfig": {
    "root": true,
    "env": {
    // 在node 环境下启动 Eslint 检测
      "node": true
    },
    // exlint 中基础配置需要继承的配置
    "extends": [
      "plugin:vue/vue3-essential",
      "@vue/standard",
      "@vue/typescript/recommended"
    ],
    // 解析器
    "parserOptions": {
      "ecmaVersion": 2020
    },
    //  错误级别分为三种
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn（不会导致程序退出）
    // "error" 或者 2 - 开启规则，使用错误级别的错误：error(当被触发的时候, 程序会退出)
    "rules": {}
  },
```

### prettier
- 代码格式化工具
- 开箱即用
- 直接集成到vscode
- 保存时，让代码直接符合ESLint

#### eslint 与 prettier 配合 实现保存自动格式化
1. vscode 安装插件 prettier
2. 项目根目录添加 .prettierrc 文件
3. vscode 打开设置 搜索 save -> format on save 勾选
4. 有多个格式化工具时，右键选择使用格式化文档-> prettier

## git 提交规范
### 约定式提交
 > [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)是一种基于提交信息的轻量级约定。 它提供了一组简单规则来创建清晰的提交历史； 这更有利于编写自动化工具。 通过在提交信息中描述功能、修复和破坏性变更， 使这种惯例与 SemVer 相互对应。

 ``` JavaScript
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
 ```
### commitizen
- github: cz-cli
- 当使用commitizen 进行代码提交时，commitizen会提交你在提交时填写所有必须的提交字段
### commitizen 使用
1. 全局安装 commitizen

``` JavaScript
 npm install -g commitizen@4.2.4
```

2. 安装并配置 cz-customizable 插件
   1. 使用 npm 下载 cz-customizable
    ``` JavaScript
      npm i cz-customizable@6.3.0 --save -dev
    ```
    
    2. 添加以下配置到 package.json 中
   ``` JavaScript
   ...
   "config": {
     "commitizen": {
       "path": "node_modules/cz-customizable"
     }
   }
   ```
   
3. 项目更目录下创建 .cz-config.js 自定义提示文件
``` JavaScript
module.exports = {
    types: [
        { value: 'feat', name: 'feat:     新功能' },
        { value: 'fix',  name: 'fix:       修复' },
        { value: 'docs', name: 'docs:     文档变更' },
        {value: 'style', name: 'style:   代码格式（不影响代码运行的变动）',},
        {value: 'refactor', name: 'refactor: 重构(既不是增加feature, 也不是修复bug)'},
        {value: 'perf',name: 'perf:     性能优化'},
        { value: 'test', name: 'test:     增加测试' },
        { value: 'chore',name:  'chore:    构建过程或辅助工具的变动'},
        { value: 'revert', name: 'revert:   回退' },
        { value: 'build', name: 'build:     打包' },
        {value: 'conflict', name: 'conflict: 修改冲突'},
        {value: 'font', name: 'font: 字体文件更新'},
        {value: 'delete', name: 'delete: 删除文件'},
        {value: 'stash', name: 'stash: 暂存文件'},
      ],
      messages: {
        type: "请选择提交的类型",
        // used if allowCustomScopes is true
        customScope: '请输入修改的范围（可选）',
        subject: '请简要描述提交（可选）',
        body: '请输入详细描述（可选）',
        footer: '请输入要关闭的issue（可选）',
        confirmCommit: '确认要使用以上信息提交？(y/n)',
      },
     //  可跳过的步骤
      skipQuestions: ['body'],
      subjectLimit: 100,
}
```

4. 使用git cz 代替 git commit 

### 使用Git Hooks(git 钩子 || git回调方法) 校验提交信息
> 当提《交描述信息》不符合约定式提交规范时，阻止当前的提交，并抛出对应的错误提示（git 在执行某个事件之前或之后进行一些其他额外的操作，阻止不合规范的提交消息，需要使用 hooks 的钩子函数）

  1. pre-commit: 会在提交前被调用，并且可以按需指定是否要拒绝本次提交
  2. commit-msg：可以用来规范化标准格式，并且可以按需指定是否要拒绝本次提交

#### 使用 husky + commitlint 检查提交描述是否符合规范要求
- [commitlint](https://github.com/conventional-changelog/commitlint)：用于检查提交信息
  1. 安装依赖
  ``` JavaScript
  npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
  ```
  
  2. 创建 commitlint.config.js
  ``` JavaScript
  echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
  ```
  
  3. 打开 commitlint.config.js，增加配置项
  ``` JavaScript
        module.exports = {
          // 继承的规则
          extends: ['@commitlint/config-conventional'],
          // 定义规则
          roles: {
            // type 的类型定义: 表示git 提交的type 必须在以下类型范围之内
            'type-enum': [
              // 当前验证的错误级别
              2,
              // 在什么情况下进行验证 always: 总是
              'always',
              // 泛型内容： .cz-config.js types 字段
              [
                'feat', 'fix', 'docs', 'style', 'refactor', 'delete', 'stash',
                'perf', 'test', 'chore', 'revert', 'build', 'conflict', 'font'
              ]
            ],
            // subject 大小写不做校验
            'subject-case': [0]
          }
      }
    ```

- [husky](https://github.com/typicode/husky)：是git hooks 工具

  1. 安装依赖

    ``` JavaScript
      npm install husky@7.0.1 --save-dev  
    ```

  2. 启动 hooks，生成 .husky 文件夹
     
    ``` JavaScript
        npx husky install
    ```
  3. 在package-json 中生成 prepare指令（npm > 7.0）
     
    ``` JavaScript
      npm set-script prepare "husky install"
    ```
  4. 执行 prepare指令
     
    ``` JavaScript
        npm run prepare
    ```

  5. 添加 commitlint 的 hook 到 husky 中，并指令在 commit-msg 的hooks 下执行 npx --no-install commitlint --edit “$1” 指令

    ``` JavaScript
      npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
    ```

  #### pre-commit 检测提交时代码规范（husky 配合 eslint）
  > 通过 husky 检测 pre-commit 钩子，在该钩子下执行 npx eslint --ext .js,.vue src 指令来去进行相关检测

  1. 添加 commit 的 hook
   
   ```JavaScript
    npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"
   ```

#### lint-staged 自动修复格式错误
> [lint-staged](https://github.com/okonet/lint-staged) 可以让你当前代码检查 只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送，lint-staged 无需单独安装，我们生成项目时，vue-cli 已经帮我们安装过了，所以可以直接使用

1. 修改 package.js 配置

  ``` JavaScript
  ...
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  }
  // 符合规范会提交成功
  // 不符合规范会自动执行 eslint --fix 尝试修复，修复成功后进行代码提交，修复失败，提示错误
  ```
2. 修改 .husky/pre-commit 文件
  ``` JavaScript
   npx lint-staged
  ```
  
### 解决git图形化工具提交失败
  > .husky/pre-commit: Line 4 npm: command not found, 错误描述告诉我们，这是因为SourceTree找不到husky钩子中需要使用的命令。

  1. 找到npm所在路径的方法
   ```JavaScript
     where npm
     // /usr/local/bin/npm
   ```
   
  2. 该文件默认是没有的，用以下命令自动创建文件并添加路径
   ```JavaScript
    echo 'export PATH="/usr/local/bin/:$PATH"' >> ~/.huskyrc
   ```
   
  3. 参考：https://github.com/typicode/husky/issues/904
# 布局
## css reset
[normalize.css](http://necolas.github.io/normalize.css)是一种CSS reset的替代方案，相比于传统的CSS reset, normalize.css是一种现代的、为HTML5准备的优质替代方案。
在 assets/scss 下新建 `index.scss`、 `reset.scss`, 复制 `normalize.css`内容到 `reset.scss` 中， 并把 index.scss 引入 main.js

```JavaScript
// index.scss
// @import "reset";
```
## scss 全局变量
在使用公共的如 `variable.scss`、`mixin.scss` 时，通过配置 [vue.config.js](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9) 全局导入的方式，解决多文件引入 `variable`、`mixin`

```JavaScript
module.exports = {
    css: {
        loaderOptions: {
            scss: {
              additionalData: '@import "~@/assets/scss/variable.scss"'
            }
        }
    }
}

// 使用
// variable.scss  $width: 210px;
// 某单文件组件，直接使用 $width，不需要单独引入 variable.scss
.container {
    width: $width
}
```
## scss 与 js 共享变量
> 在scss中通过 [:export](https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass) 进行导出，在js 中可以通过 ESM 进行导入

- variable.scss

```scss
    ...
    $siderWidth: 210px;
    :export {
        ...
        siderWidth: $siderWidth;
    }
```
- .vue

```JavaScript
 ...
```


# 模式和环境变量
## 模式
Vue CLI 项目有三个模式:
- development 模式用于 vue-cli-service serve
- test 模式用于 vue-cli-service test:unit
- production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e

你可以通过传递 --mode 选项参数为命令行覆写默认的模式:

```JavaScript
    vue-cli-service build --mode development
```

## 环境变量
你可以在你的项目根目录中放置下列文件来指定环境变量：

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

请注意，只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。

## 只在本地有效的变量

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 .env.local 文件取而代之。本地环境文件默认会被忽略，且出现在 .gitignore 中。

.local 也可以加在指定模式的环境文件上，比如 .env.development.local 将会在 development 模式下被载入，且被 git 忽略。

参考 [vuecli](https://cli.vuejs.org/zh/guide/mode-and-env.html) 介绍

## 配置环境变量封装axios模块
 在项目根目录下新建 `.env.development`、`.env.production` 文件：
 
```sh
 VUE_APP_BASE_API = '你的请求地址'
```

在src/utils 下创建 `axios.ts` 文件：
```JavaScript
    import axios from 'axios'
    const service = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        timeout: 5000
    })
    export default service
```

这样当运行不同模式时 process.env.VUE_APP_BASE_API 指向的地址是不同的

# 封装请求
## 接口封装示例
在 src/api 下新建 `sys.ts` 文件

```JavaScript
    import request from '@/utils/axios'
    export const login = (data: any) => {
        return request({
            url: '/login',
            method: 'post',
            data
        })
    }
```

# 状态管理工具 pinia
> 与vuex相比,[pinia](https://pinia.vuejs.org)去除了vuex中对于同步函数Mutations和异步函数Actions的区分,直接在Actions中便能够使用同步和异步方法（在vuex的开发计划中也将会除去同步和异步的区分）,其次相比于vuex，pinia对于typescript的支持性更好，友好的devTools支持

## 安装

```JavaScript
 yarn add pinia
```

## 使用

store 目录结构
```sh
├── src 
│   ├── store 
│       ├──modules      # 存放各模块的store
│          ├─user.ts
│       ├──index.ts     # 导出各模块store 方便使用
```

main.ts
```JavaScript
    ...
    import { createPinia } from 'pinia'
    const store = createPinia()
    createApp(App).use(store).mount('#app')
```

user.ts
```JavaScript
    import { defineStore } from 'pinia'
    export const userStore = defineStore('user', {
        state: () => ({}),
        getters: {},
        actions: {}
    })
```

index.ts
```JavaScript
    export * from './modules/user'
```

页面使用

```JavaScript
    import { userStore } from '@/store'
    const store = userStore()
    store.login({...})
```
## 插件
比如在pinia状态管理里需要路由跳转功能，直接导入 `vue-router` useRouter() 是undefined，可以使用 `pinia` 的插件机制导入 `router` 实例

```JavaScript
    import { createPinia } from 'pinia'
    import { markRaw } from 'vue'
    import router from '@/router'
    const pinia = createPinia()
    pinia.use(({store}) => {
        store.router = markRaw(router)
    })
```
# 登陆存储token并在request headers中携带token
在获取到token之后，我们会把token进行缓存，分为两种形式：
    1. 本地缓存： token没过期时，自动登录
    2. 全局状态管理：vuex、pinia...  
## 存储

```JavaScript
import { userStore } from '@/store'
import { TOKEN } from '@/constant'
import Storage from '@/utils/Storage'
const store = userStore()
const storage = new Storage()
// 登陆成功后
...
    const {data } = await store.login(formData.value)
    store.token = data.token
    storage.setItem(TOKEN, data.token)
```

## request headers 携带 token

```JavaScript
 // utils/axios.ts
 import axios, { AxiosRequestHeaders } from 'axios'
 ...
 axios请求拦截
 service.interceptors.request.use((config) => {
    const store = userStore();
    (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${store.token}`
    return config
}, e => {
    return Promise.reject(e)
})
```

# 数据mock
本项目采用fastomck，进行数据模拟，[fastmock](https://www.fastmock.site)一个脱离原项目的在线Mock平台，可以让你在没有后端程序的情况下能真实地在线模拟ajax请求，本地零开发，使用简单，只要熟悉Mock.js，那你就可以轻松模拟各种数据。

# 登陆权限验证
> 已登陆，不允许跳转登陆页面、未登陆只能跳白名单页面

```JavaScript
// router/guard/permission.ts
import { Router } from 'vue-router'
import { userStore } from '@/store'
const whitePathList: string[] = ['/login']
export const permissionGuard = (router: Router) => {
    router.beforeEach(async (to, from, next) => {
        const store = userStore()
        if (store.token) {
            if (to.path === '/login') {
                next('/')
            } else {
                next()
            }
        } else {
            if (whitePathList.indexOf(to.path) > -1) {
                next()
            } else {
                next('/login')
            }
        }
    })
}
```

# 获取用户信息
> 登陆成功后，用户信息不存在，则请求接口，获取用户信息

```JavaScript
import { userStore } from '@/store'
router.beforeEach(async (to, from, next) => {
    const store = userStore()
    ...
    //登陆成功，用户信息为空，请求用户信息接口
    if (!store.userinfo) {
     const { data } = await store.getUserInfo()
     store.userinfo = data
    }
    ...
}
```

# 退出登陆
退出登陆分为两种情况：
1. 用户主动退出
2. token 过期 或 被其他人登陆（单点登录）

不管什么情况，退出登陆时的操作都是固定的：
1. 清除用户缓存数据
2. 清理权限配置
3. 返回登陆页

# 根据路由表动态生成左侧菜单栏

    


