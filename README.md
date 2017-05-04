# webpack-transition-toy-angular-example
A toy Angular.js project needs transitioning to webpack

## 目标

在不修改任何业务代码的情况下，将整个项目改成使用 webpack 加载，要求满足以下环境需求：

### 开发环境
运行 `npm start` 就能启动开发环境
1. 修改 js, css 文件可以自动重载，其中 css 文件可以做到不刷新页面重载样式
1. js 代码可以使用最新的 ES2017 特性
1. css 代码可以不用书写[vendor prefix](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)

### 产出环境
运行 `npm run build` 就能进行生产环境构建
1. 实现 js 与 css 的最小化
1. 模块引用的所有 css 被提取成一个样式文件
1. 生成模块的文件名均带有 hash 以实现[Long Term Caching](https://webpack.github.io/docs/long-term-caching.html)

## 安装依赖
```bash
npm i
```

## 启动项目
```bash
npm start
```
