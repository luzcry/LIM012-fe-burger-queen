<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Gudea:ital@1&family=Lemonada&family=Varela+Round&display=swap"
      rel="stylesheet"
    />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
#app {
  @import "./assets/scss/_variables.scss";
  background-image: url("~@/assets/background.svg");
  height: 100vh;
}
</style>
