import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Multiselect from "@vueform/multiselect";
const app = createApp(App);
app.component("Multiselect", Multiselect);

const components = import.meta.globEager('./components/*/*.vue')
Object.entries(components).forEach(([path, definition]) => {
    const componentName = path.split('/').pop().replace(/\.\w+$/, '')
    app.component(componentName, definition.default)
})
app.use(router).mount("#app");

