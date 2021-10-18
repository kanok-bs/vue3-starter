<script setup lang="ts">
import useNotyf from "./../../utils/useNotyf";
import Multiselect from "@vueform/multiselect";
const notyf = useNotyf();
import { defineProps, reactive, toRefs } from "vue";
import { user } from "@/models/user";
import { userState } from "@/states/states";
import { useRouter } from "vue-router";

const { users } = toRefs(userState);
const router = useRouter();
const props = defineProps({
  countries: {
    type: Array,
  },
  borders: {
    type: Array,
  },
});
const input = reactive<user>({} as any);
const Add = () => {
  users.value.push(input);
  router.push({ name: "userlist" });
  notyf.success("Save Succesfull");
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<template>
  <form @submit.prevent="Add">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input type="text" class="form-control" v-model="input.name" />
      </div>
      <div class="form-group col-md-6">
        <label for="inputState">Countries</label>
        <select class="form-control" v-model="input.countries">
          <option v-for="c in props.countries" :key="c.name" :value="c.name">
            {{ c.name }}
          </option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label for="inputState">Borders</label>
        <Multiselect
          label="value"
          v-model="input.borders"
          placeholder="Select your borders"
          :options="borders"
          mode="multiple"
          :closeOnSelect="false"
        >
        </Multiselect>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Currency</label>
        <input type="text" class="form-control" v-model="input.currency" />
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Language</label>
        <input type="text" class="form-control" v-model="input.language" />
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Region</label>
        <input type="text" class="form-control" v-model="input.region" />
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Capital</label>
        <input type="text" class="form-control" v-model="input.capital" />
      </div>
    </div>
    <div class="from-group mt-4">
      <button class="btn btn-primary">Save</button>
    </div>
  </form>
</template>
