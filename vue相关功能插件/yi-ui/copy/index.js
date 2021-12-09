import YiCopy from "./src/main.vue";

YiCopy.install = (Vue) => {
    Vue.component(YiCopy.name, YiCopy);
}

export default YiCopy;