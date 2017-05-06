# webpack-transition-toy-angular-example
A toy Angular.js project needs transitioning to webpack

## Slides 下载地址
[Markdown](https://github.com/easyops-cn/webpack-transition-toy-angular-example/blob/slides/docs/slides-webpack-development.md)
|
[PDF](https://github.com/easyops-cn/webpack-transition-toy-angular-example/raw/slides/docs/slides-webpack-development.pdf)

## 动手环节事先准备

这样省去现场 `npm install` 的时间

```bash
git clone https://github.com/easyops-cn/webpack-transition-toy-angular-example.git
cd webpack-transition-toy-angular-example
git checkout webpack
npm i

# or you have yarn installed
yarn
```

## 目标

在不修改任何业务代码的情况下，将整个项目改成使用 webpack 加载，要求满足以下环境需求：

### 开发环境
运行 `npm start` 就能启动开发环境
1. 修改 js, css 文件可以自动重载，其中 css 文件可以做到不刷新页面重载样式
1. js 代码可以使用最新的 [ES2017 特性](https://babeljs.io/docs/plugins/preset-es2017/)
1. css 代码可以不用书写[vendor prefix](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)
1. 开发环境中抛错可以定位到构建前的源代码

### 产出环境
运行 `npm run build` 就能进行生产环境构建
1. 实现 js 与 css 的最小化
1. 模块引用的所有 css 被提取成一个样式文件
1. 生成模块的文件名均带有 hash 以实现[Long Term Caching](https://webpack.github.io/docs/long-term-caching.html)
1. 生产环境抛错可以给出构建前源代码的行数和列数，但无法查看构建前的源代码

## 安装依赖
```bash
npm i
```

## 启动项目
```bash
npm start
```
