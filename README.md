# admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### eslint 配置

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
 > [约定式提交规范是一种基于提交信息的轻量级约定。 它提供了一组简单规则来创建清晰的提交历史； 这更有利于编写自动化工具。 通过在提交信息中描述功能、修复和破坏性变更， 使这种惯例与 SemVer 相互对应。](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

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

- husky：是git hooks 工具

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