import YiPhotoPreview from "./src/main.vue";

YiPhotoPreview.install = (Vue) => {
    Vue.component(YiPhotoPreview.name, YiPhotoPreview);
}

export default YiPhotoPreview;
