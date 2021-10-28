<script setup lang="ts">
import { CountryServices } from "./../../services/countryservice";
import { onMounted, toRefs } from "vue";
import { countryState } from "@/states/states";
const countryServices = new CountryServices();
const { countries } = toRefs(countryState);
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
      <UserAdd :is="component" :countries="countries" />
    </div>
  </div>
</template>
