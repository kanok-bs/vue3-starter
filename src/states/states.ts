import { user } from "@/models/user";
import { reactive, ref } from "vue";

export const userState = reactive({
  users: ref<user[]>([] as any),
  error: null,
});

export const countryState = reactive({
  countries: ref([{name:"BD"},{name:"USA"}] as any),
  error: null,
  userunit: ref({}),
});

export const loginState = reactive({
  username: ref(""),
  IsAuthenticated: ref(false),
  error: null,
});
