import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.scss";
import "@/assets/css/_fonts.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
