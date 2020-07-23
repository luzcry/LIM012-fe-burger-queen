<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Mulish&family=Noto+Serif&display=swap"
      rel="stylesheet"
    />
    <!--<top-header></top-header>
    <router-link to="/login">Inicia sesión</router-link>
    <router-link to="/register">Registrate</router-link>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/kitchen">Cocina</router-link>
    <router-link to="/listOfOrders">Lista de ordenes</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
/*import topheader from "./components/top-header";*/
export default {
  name: "App"
  /* components: { "top-header": topheader } */
};
</script>
<style lang="scss">
#app {
  @import "./assets/scss/_variables.scss";
  background-image: url("~@/assets/background.svg");
  height: 100vh;
}
</style>
