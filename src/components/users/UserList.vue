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
            <th scope="col">capital</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(u, key) in props.users" :key="key">
            <td>{{ u.name }}</td>
            <td>{{ u.countries ? u.countries : "" }}</td>
            <td>{{ u.borders ? u.borders[0] : "" }}</td>
            <td>{{ u.currency?u.currency:"" }}</td>
            <td>{{ u.language?u.language:"" }}</td>
            <td>{{ u.capital?u.capital:"" }}</td>
            <td>{{ u.region?u.region:"" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
