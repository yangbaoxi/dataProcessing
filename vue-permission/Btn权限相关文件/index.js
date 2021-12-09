/**
 * 全局自定义指令
 */
import Vue from "./node_modules/vue";
import store from "../store/index";

// button 权限 指令

const permission = Vue.directive('permission', {
    inserted(el, binding){
        const { value } = binding;
        const roles = store.getters && store.getters.roles;
        if (value && value.length > 0) {
            const permissionRoles = value;
            const hasPermission = roles.some(role => {
                return role.buttonId == permissionRoles;
            })
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            throw new Error(`need roles! Like v-permission="[buttonId]"`);
        }
    }
})

export default {
    permission
}
