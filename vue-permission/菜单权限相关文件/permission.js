import router from "./router/index"; // 路由
import store from "./store/index"; // vuex
import $axios from "./service/service.util"; // axios
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress css
import $public from "./utils/public"; // 工具库
import Layout from "@/views/Layout/Layout"// 公共视图层
const _import = require('./router/_import'); // 一个引入文件的js
let cookie = new $public.Cookie(); // 工具库里面的 cookie对象
const whiteList = ['/login', '/purview/user', "/purview/roles"]; // 白名单
NProgress.configure({ showSpinner: false }); // 配置 NProgress （详细查阅 NProgress 文档）
router.beforeEach((to, from, next) => {
    let token = cookie.get('token'); // 获取 token
    NProgress.start();
    if (token) { // has token
        if (to.path === "/login") { // 如果是登录状态 访问登录页面将会重定向根目录
            next();
            NProgress.done();
        } else {
            if (store.getters.user) { // 如果有user 直接拿vuex里面的router
                next();
            } else { // 如果没有重新获取用户信息
                $axios({
                    url: "/user/getUserInfo",
                    method: "post",
                    data: { id: 1 }
                }).then((res) => {
                    $public.CodeError(res.code, res.msg).then(() => {
                        let data = res.data;
                        data.routers = filterAsyncRouter(data.menus);
                        store.dispatch('user/GenerateRoutes', data).then(() => {
                            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
                            next({ ...to, replace: true });
                        })
                    }).catch(() => { // 错误码处理
                        next('/login');
                    })
                }).catch((err) => {
                    console.error(err);
                    next('/login');
                })
            }
        }
    } else { // has no token
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next();
        } else {
            next("/login"); // 否则全部重定向到登录页
            NProgress.done();
        }
    }
})

// 后端数据过滤函数 要根据数据结构进行 改造内部的代码！！！！！！！
function filterAsyncRouter(asyncRouterMap) { // router 过滤
    const accessedRouters = asyncRouterMap.filter((route) => {
        if (route.component) {
            route.hidden = isBoole(route.hidden)
            route.meta = {
                title: route.title,
                icon: route.icon
            }
            if (route.component === "Layout") {
                route.component = Layout;
            } else {
                route.component = _import(route.component);
            }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true;
    })
    return accessedRouters;
}

// 也是因为后端数据原因
function isBoole(num){ // 0 为 true 1 为 false
    return Number(num) == 0;
}

router.afterEach(() => {
    NProgress.done(); // end
})
