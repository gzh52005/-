<template>
  <div id="app">
    <appHome></appHome>
  </div>
</template>

<script>
import appHome from "./components/Home/index.vue";

export default {
  data() {
    return {};
  },

  components: {
    appHome
  },

  methods: {}
};
</script>
<style lang="scss">
@import "./assets/sass/reset.scss";
@import "./assets/sass/home.scss";
</style>
