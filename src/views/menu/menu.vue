<template>
  <div>
    <top-header :isActive="true" title="MENÚ"></top-header>
    <div class="containerMenu">
      <div>
        <btns-menu></btns-menu>
      </div>
      <div class="containerResume">
        <resume-order :orders="orders"></resume-order>
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
  components: { "top-header": topheader, btnsMenu, resumeOrder },
  data() {
    return {
      orders: [
        {
          description: "hamburguesa simple pollo",
          price: 20,
          cuantity: 1,
          hasEgg: Boolean,
          hasCheesse: Boolean
        },
        {
          description: "hamburguesa doble carne",
          price: 20,
          cuantity: 1,
          hasEgg: Boolean,
          hasCheesse: Boolean
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss"

@media (min-width: 768px) and (max-width: 1280px)
  .titleMenu
    display: flex
    justify-content: center
    color: $color-font-green
    font-family: $basefont
    font-size: 18px

  .imgMenu
    padding-left: 10px
    width: 55px
    height: 70px

  .containerMenu
    display: flex
    justify-content: space-between
    margin: 2rem

  .item
    display: flex
    flex-direction: column
    align-items: center
    padding: 1rem

  .breakfast
    display: flex
    align-self: center
    flex-direction: column
</style>
