/* 用户相关 */
import $public from "../../utils/public"; // 工具类
import { constantRouterMap } from "../../router/index";
import constantBtnsMap from "../../directive/json/permission.json"; // Btn 权限 静态文件
let cookie = new $public.Cookie();
let token = cookie.get('token');
const state = {
    user: null, // 用户
    name: "", // 用户名称
    token: token, // token
    routers: constantRouterMap,// 静态路由
    addRouters: [], // 动态路由
    constBtns: constantBtnsMap, // 静态 Btn Id
    roles: [] // 动态权限Btn组
}

const getters = {
}

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_NAME(state, name) {
        state.name = name;
    },
    SET_ROUTERS(state, routers) {
        state.addRouters = routers; // 动态路由添加
        state.routers = constantRouterMap.concat(routers); // 静态路由跟动态路由合并
    },
    SET_ROLES(state, roles) {
        state.roles = roles; // 权限btn添加
    }
}

const actions = {
    GenerateRoutes({ commit }, data) {
        return new Promise(resolve => {
            commit('SET_USER', data.userId);
            commit('SET_NAME', data.userName);
            commit('SET_ROLES', data.buttons);
            commit('SET_ROUTERS', data.routers);
            resolve();
        })
    },
    GenerateToken({ commit }, data) {
        commit('SET_TOKEN', data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
