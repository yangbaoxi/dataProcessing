import YiBreadcrumb from "./src/main.vue";

YiBreadcrumb.install = (Vue) => {
    Vue.component(YiBreadcrumb.name, YiBreadcrumb);
}

export default YiBreadcrumb;