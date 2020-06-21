<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/shared/Navigation.vue";
export default {
  components: {
    "navigation-bar": Navigation,
  },
};
</script>

<style></style>
