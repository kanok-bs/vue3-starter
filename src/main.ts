import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Sidebar from "./components/shared/Sidebar.vue";
import Navbar from "./components/shared/Navbar.vue";
import UserList from "./components/users/UserList.vue";
import UserAdd from "./components/users/UserAdd.vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

const app = createApp(App);
app.component("Sidebar", Sidebar);
app.component("Navbar", Navbar);
app.component("UserList", UserList);
app.component("UserAdd", UserAdd);
requireComponent.keys().forEach((fileName: string) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});
app.use(router).mount("#app");

