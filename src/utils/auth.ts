import { toRefs } from "@vue/runtime-core";
import { loginState } from "./../states/states";
export const AuthGuard = async (to: any, from: any, next: any) => {
  const { IsAuthenticated } = toRefs(loginState);
  if (IsAuthenticated.value) {
    return next();
  } else {
    next({ name: "login" });
    return;
  }
};
