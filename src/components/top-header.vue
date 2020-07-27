<template>
  <div class="container-header">
    <div class="header-left">
      <p>Valhalla's Burger</p>
      <p>¡Del paraíso a tu paladar!</p>
      <p>Nombre del mesonerx:</p>
      <p>Hora</p>
    </div>
    <div class="header-right">
      <img class="logo" src="../assets/logogreen.svg" alt="logo" />
      <btn @onClick="signOut" title="Cerrar sesión"></btn>
    </div>
  </div>
</template>

<script>
import { logOut } from "../data/auth";
import btn from "./btn";
export default {
  name: "top-header",

  components: {
    btn
  },
  methods: {
    signOut: function() {
      try {
        logOut();
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    }
  }

  /* data() {
    return {
      loggedIn: false
    };
  }*/
};
</script>

<style lang="sass">
@import "../assets/scss/_variables.scss";
@media (min-width: 768px) and (max-width: 1280px)
  .container-header
    display: flex;
    margin: 2rem;
  .header-right
    display: flex;
    flex-direction: column;
    margin-left: auto;

  .header-left
    color: $color-font-green;
    font-size: 22px;

  .header-left > p
    margin: 2px;

  .logo
    width: 140px;
</style>
