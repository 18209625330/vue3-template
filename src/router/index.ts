import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index';
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import( '../views/AboutView.vue')
//   }
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),//在vue.config.js中的publicPath中配置根目录
  //记录滚动的位置解决白屏问题，必须配合keep-alive
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果有保存的位置，则返回保存的位置
      return savedPosition;
    } else {
      // 否则返回一个新的位置对象
      return { left: 0, top: 0 };
    }
  },
  routes:[
    {
      path:"/",
      name:"main",
      component:()=>import("../views/home/IndexView.vue")
    }
  ],
})

//将store内部的routes模块下的routesData数据源拼接成一维数组
const oneRoutes:any = [];
function setOneRoutes(data: RouteRecordRaw[]) {
  if (data.length > 0) {
    for (const route of data) {
      if (route.component) {
        const tmpComponent = route.component;
        route.component = () => import(`../views/${tmpComponent}`);
        oneRoutes.push(route);
      }

      if (route.children && route.children.length > 0) {
        setOneRoutes(route.children);
      }
    }
  }
}


//使用setTimeout模拟异步请求数据
setTimeout(()=>{
  //服务端接口请求的数据源
  const routesData=[
    {
      name:"栏目管理",//路由名称
      path:"column",//路由中的path
      component:"admin/column/IndexView.vue",//路由映射的组件
      meta:{
        id:"1",
        auth:true,//会员登录验证标识
        keepAlive:false,//是否开启keep-alive。true:开启，false:关闭
        isActive:false,//点击后的颜色
        isLnkActive:false//点击链接后的颜色
      }
    },
    {
      name:"会员管理",
      meta:{
        id:"2",
        auth:true,
        keepAlive:false,
        isActive:false,
        isLnkActive:false,
      },
      children:[
        {
          name:"查看会员",
          path:"user",
          component:"admin/column/IndexView.vue",
          meta:{
            id:"2-1",
            auth:false,
            keepAlive:true,
            isActive:false,
            isLnkActive:false
          }
        },
        {
          name:"编辑会员",
          // path:"add_user",
          // component:"admin/user/add",
          meta:{
            id:"2-2",
            auth:true,
            keepAlive:false,
            isActive:false,
            isLnkActive:false
          },
          children:[
            {
              name:"添加",
              path:"add_user",
              component:"admin/user/AddView.vue",
              meta:{
                id:"2-2-1",
                auth:true,
                keepAlive:false,
                isActive:false,
                isLnkActive:false
              }
            }
          ]
        }
      ]
    },
    {
      name:"订单管理",
      meta:{
        id:"3",
        auth:true,
        keepAlive:false,
        isActive:false,
        isLnkActive:false
      },
      children:[
        {
          name:"查看订单",
          path:"order",
          component:"admin/order/IndexView.vue",
          meta:{
            id:"3-1",
            auth:true,
            keepAlive:false,
            isActive:false,
            isLnkActive:false
          }
        },
      ]
    },
    {
      name:"百度",
      path:"http://www.baidu.com",
      meta:{
        id:"4",
        isActive:false,
        isLnkActive:false,
        isLink:true,//是否外链
      }
    }
  ]
  store.dispatch("routes/setRoutes",{routesData:routesData}).then(()=>{
    // setOneRoutes(store.state.routes.routesData as any);
    setOneRoutes((store.state as any).routes.routesData);
    //使用addRoutes方法，添加动态路由
    router.addRoute(
      {
        path:"/admin",
        name:"admin",
        component:()=>import("../views/admin/index/IndexView.vue"),
        redirect:"/admin/column",
        meta:{auth:true},
        children:oneRoutes//将组装好的子路由配置数据赋值给children属性
      });
  })
},300)

router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    if(localStorage['isLogin']){
      next();
    }else{
      next("/");
    }
  }else {
    next();
  }
});
export default router
