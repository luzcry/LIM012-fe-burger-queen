<template>
  <div class="container-header">
    <div>
      <img class="logo" src="../assets/logogreen.svg" alt="logo" />
    </div>
    <div>
      <p>Valhalla's Burger</p>
      <p>¡Del paraíso a tu paladar!</p>
    </div>
    <div>
      <p>
        Fecha:
        <span>{{ dateOnly }}</span>
      </p>
      <p>
        Hora:
        <span>{{ timestamp }}</span>
      </p>
    </div>
    <div id="btnHeader">
      <btn id="btnLogOut" @onClick="signOut" title="Cerrar sesión"></btn>
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
    },
    getNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time;
      const dateOnly = date;
      (this.timestamp = dateTime), (this.dateOnly = dateOnly);
    }
  },

  data: function() {
    return {
      timestamp: "",
      dateOnly: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  }
};
</script>

<style lang="sass">
@import "../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)

  .container-header
    display: flex;
    margin: 1rem;
    justify-content: space-around;
    font-family: $secondaryFont;
    color: $color-font-green;
    font-size: 18px;

  .header-left
    display: flex;
    flex-direction: column;
    align-items: center;

  .logo
    width: 100px;

  #btnLogOut
    font-size: 13px;

  #btnHeader
    align-self: center;
</style>
