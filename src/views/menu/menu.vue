<template>
  <div>
    <top-header></top-header>
    <div class="titleMenu">
      <h1>Menú</h1>
      <img class="imgMenu" src="../../assets/menu/menu.png" alt="menu" />
    </div>
    <div class="containerMenu">
      <div>
        <btns-menu></btns-menu>
      </div>
      <div class="containerResume">
        <resume-order></resume-order>
      </div>
    </div>
  </div>
</template>

<script>
import topheader from "../../components/top-header.vue";
import btnsMenu from "./btnsMenu.vue";
import resumeOrder from "./resumeOrder.vue";

export default {
  name: "menu",
  components: { "top-header": topheader, btnsMenu, resumeOrder }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)
  .titleMenu
    display: flex;
    justify-content: center;
    align-self: center;
    color: $color-font-green;
    font-famiy: $secondaryFont;
    font-size: 18px;

  .imgMenu
    padding-left: 10px;
    width: 55px;
    height: 70px;

  .containerMenu
    display: flex;
    justify-content: space-between;
    margin: 1rem;

  .item
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

  .breakfast
    display: flex;
    align-self: center;
    flex-direction: column;
</style>
