# 将项目拉去到本地后运行，按照管理运行以下命令
```
npm install
```
```
npm run serve
```
# 0.0.1 对vue-router和vuex进行了初次的封装
## vue-router的相关内容
从后端异步获取路由数据，便于工作当中的一些功能，例如设置访问权限、后端控制该页面是否开放等。
1. 在src/router/index.ts中写入了具体的代码。
2. 使用的是路由中的`history`模式，访问后端的域名在`vue.config.js`中的`publicPath`中配置。
3. `scrollBehavior`函数用于控制在不同路由之间切换时的滚动行为：
   - to: 表示目标路由对象。
   - from: 表示当前路由对象。
   - savedPosition: 表示已保存的滚动位置状态。
   在这个函数中，它首先检查是否有已保存的位置（savedPosition）。如果有保存的位置，就返回那个位置；如果没有保存的位置，就返回一个新的位置对象，其中 { left: 0, top: 0 } 表示滚动到页面的左上角。这样可以确保在路由切换时，页面的滚动位置得到正确的控制。
4. `routes`数组用于保存默认存在的路径，无论什么权限或什么情况下都会被开放的路由页面。
5. `setOneRoutes`函数将从后端获取到的json数据解析成router可以识别的样子：包括name、path、component、children等。
6. 接下来的`store.dispatch`方法主要作用是获取到vuex中的路由数据，该数据是从后端获取，并存储在vuex中的，具体看下面vuex的相关内容。
7. ` router.beforeEach`路由守卫。

## vuex的相关内容
使用时引入store/index.ts入口文件即可。
### store/index.ts
入口文件
### store/admin/index.ts
其中主要写了对用户的主要操作，这里只写了登录、登出状态。
### store/routes/index.ts
其中主要写了该用户的权限所能访问的路由。

# 该项目正逐步完善，希望大家多多关注。
