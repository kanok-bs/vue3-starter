<script setup lang="ts">
import useNotyf from "./../../utils/useNotyf";
import { CountryServices } from "./../../services/countryservice";
import { onMounted, toRefs } from "vue";
import { countryState, borderState } from "@/states/states";
const notyf = useNotyf();

const countryServices = new CountryServices();
const { countries } = toRefs(countryState);
const { borders } = toRefs(borderState);
onMounted(() => {
  countryServices.getAll();
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Add User</h5>
    </div>
    <div class="card-body">
      <UserAdd :countries="countries" :borders="borders"  />
    </div>
  </div>
</template>
