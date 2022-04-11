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
