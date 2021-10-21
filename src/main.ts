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

const capitalizeFirstLetter = (string:string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const requireComponent = require.context(
  '.',true,/\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componetConfig = requireComponent(fileName);
  const a = fileName.lastIndexOf('/');
  fileName = '.' + fileName.slice(a);
  const componetName = capitalizeFirstLetter(
      fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')
  )
  console.log("---->",componetName);
  app.component(componetName,componetConfig.default || componetConfig)
})

app.use(router).mount("#app");

