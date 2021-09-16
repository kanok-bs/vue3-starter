<script setup lang="ts">
import useNotyf from "./../../utils/useNotyf";
import { defineProps } from "vue";

const notyf = useNotyf();

const props = defineProps({
  users: {
    type: Array,
  },
});
</script>

<template>
  <h3><i class="bi bi-alarm-fill"></i> Users</h3>
  <hr />
  <div class="card">
    <div class="card-header">
      <router-link to="useradd" class="btn btn-success">New User</router-link>
    </div>
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Borders</th>
            <th scope="col">Currency</th>
            <th scope="col">Languages</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in props.users" :key="u.name">
            <td>{{ u.name }}</td>
            <td>{{ u.countries?.name }}</td>
            <td>{{ u.countries?.borders }}</td>
            <td>{{ u.countries?.currencies[0].name }}</td>
            <td>{{ u.countries?.languages }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
