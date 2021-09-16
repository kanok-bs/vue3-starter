<template>
  <main>
    <Sidebar />
    <div class="container" style="margin-top:60px; padding: 30px">
      <router-view />
    </div>
  </main>
</template>
<script setup lang="ts">
import useNotyf from "./../utils/useNotyf";
const notyf = useNotyf();
</script>
