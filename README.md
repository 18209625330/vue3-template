# 将项目拉去到本地后运行，按照惯例运行以下命令
```
npm install
```
```
npm run serve
```

---

# 0.0.1 对vue-router和vuex进行了初次的封装
## vue-router的相关内容
从后端异步获取路由数据，便于工作当中的一些功能，例如设置访问权限、后端控制该页面是否开放等。
1. 在`src/router/index.ts`中写入了具体的代码。
2. 使用的是路由中的`history`模式，访问后端的域名在`vue.config.js`中的`publicPath`中配置。
3. `scrollBehavior`函数用于控制在不同路由之间切换时的滚动行为：
   - to: 表示目标路由对象。
   - from: 表示当前路由对象。
   - savedPosition: 表示已保存的滚动位置状态。
   在这个函数中，它首先检查是否有已保存的位置（savedPosition）。如果有保存的位置，就返回那个位置；如果没有保存的位置，就返回一个新的位置对象，其中 { left: 0, top: 0 } 表示滚动到页面的左上角。这样可以确保在路由切换时，页面的滚动位置得到正确的控制。
4. `routes`数组用于保存默认存在的路径，无论什么权限或什么情况下都会被开放的路由页面。
5. `setOneRoutes`函数将从后端获取到的json数据解析成router可以识别的样子：包括name、path、component、children等。
6. 接下来的`store.dispatch`方法主要作用是将从后端获取到的路由信息，存储在vuex中，并将其通过`setOneRoutes`函数后注入到router中可以使用。
   > 后端获取到的数据格式须符合store/routes/index.ts中Meta和RouteData类型接口的格式，可以根据需求自己修改接口。
7. ` router.beforeEach`路由守卫。

## vuex的相关内容
使用时引入store/index.ts入口文件即可。
1. store/index.ts
入口文件
2. store/admin/index.ts
其中主要写了对用户的主要操作，这里只写了登录、登出状态。
3. store/routes/index.ts
其中主要写了该用户的权限所能访问的路由。

---

# 0.0.2 优化，封装toast组件（类似于UI框架中的消息提示）
## 优化
优化`store/admin/index.ts`及`store/routes/index.ts`文件，提高代码可读性及运行效率。
优化主页面（`views/home/IndexView.vue`）UI，在`App.vue`中全局引用`asstes/css/common/common.css`代码优化页面UI。
## toast组件的相关内容
文件位于`components/toast`，`components/toast/ToastView.vue`是组件的样式，`components/toast/ToastView.vue`是组件的使用配置。在页面中应用于登录时用户名\密码为空时，在代码中应用于`views/home/IndexView.vue`中的login方法中，通过修改login方法中传进去的message内容，控制组件显示的文本内容。
文件具体内容在代码及注释中有详细说明。

# 该项目正逐步完善，希望大家多多关注。
