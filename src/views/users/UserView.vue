<script setup lang="ts">
import useNotyf from "./../../utils/useNotyf";
import { toRefs } from "vue";
import { userState, countryState } from "../../states/states";
const notyf = useNotyf();

const { users } = toRefs(userState);
</script>

<template>
  <UserList :users="users" />
</template>
