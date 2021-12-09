import YiSnowflak from "./src/main.vue";

YiSnowflak.install = (Vue) => {
    Vue.component(YiSnowflak.name, YiSnowflak);
}

export default YiSnowflak;