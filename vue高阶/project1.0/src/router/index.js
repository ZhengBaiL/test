// Vue第三方库引入
import Vue from 'vue'
// vue-router引入
import VueRouter from 'vue-router'
// 1.把页面路径引入
import Home from '../views/Home.vue';
import List from '../views/List.vue';
import Detail from '../views/Detail.vue';
import Demo1 from '../components/demo1.vue';
import Demo2 from '../components/demo2.vue';
// 挂载vue实例
Vue.use(VueRouter)
// 路由守卫
// 1.全局路由守卫
// 2.独享路由守卫
// 3.组件路由守卫
// ++++++++++++++++++++++++++++++++++++++++++++++
// 3.
// 自定义路由
const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    // path 路径
    path:'/home',
    name:"home",
    // component 组件
    component: Home,
    children:[
      {
        path:'vase1',
        component:()=>import('../components/vase1.vue')
      },
      {
        path:'vase2',
        component:()=>import('../components/vase2.vue'),
        beforeEnter: (to, from, next) => {
          if(localStorage.getItem("user1") === 'bbb') {
            next();
          } else {
            alert("当前用户未登录")
          }
        }
      }
    ]
  },
  {
    // path 路径
    path:'/detail/:name1/:age1',
    name:"detail",
    // component 组件
    component: Detail,
    meta:{title:"详情"}
  },
  {
    // path 路径
    path:'/list',
    name:"list",
    // component 组件
    component: List,
    meta:{isAuth:true,title:"列表"},
    children:[
      {
        path:'demo1', // 不要写: "/"
        component: Demo1
      },
      {
        path:'demo2',
        name:'demo2',
        component: Demo2
      }
    ]
  },
  
]



// 挂载到vue-router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局前置路由守卫
router.beforeEach((to,from,next) => {
  // 1.to 目标对象从...来
  // 2.from 目标对象从...走
  // 3.next 下一步
  if(to.meta.isAuth) {
    if(localStorage.getItem("user") === "aaa") {
      next()
    } else {

      console.log("您不是该网站用户")
    }
  } else {
    next();
  }
})
// 全局后置路由守卫
router.afterEach((to,form,next) => {
  document.title = to.meta.title || 'vue项目'
})
// 抛出路由
export default router
