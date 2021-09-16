<script setup lang="ts">
import useNotyf from "./../../utils/useNotyf";
const notyf = useNotyf();
import { defineProps, reactive, toRefs } from "vue";
import { user } from "@/models/user";
import { userState } from "@/states/userstate";

const { users } = toRefs(userState);

const props = defineProps({
  countries: {
    type: Array,
  },
});
const input = reactive<user>({} as any)
const Add = () => {
  users.value.push(input);
  notyf.success('Save Succesfull')
};
</script>

<template>
  <form @submit.prevent="Add">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input type="text" class="form-control" v-model="input.name" />
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">Countries</label>
        <select class="form-control" v-model="input.countries">
          <option v-for="c in props.countries" :key="c.name" :value="c">
            {{ c.name }}
          </option>
        </select>
      </div>
    </div>
    <button class="btn btn-primary">Save</button>
  </form>
</template>
