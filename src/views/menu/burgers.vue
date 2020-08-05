<template>
  <div class="containerItems">
    <div class="burgers">
      <div>
        <span class="titleburger">HAMBURGUESAS</span>
      </div>
      <div class="burger">
        <main-plate :item="items[0]" :key="items[0].name"></main-plate>
        <main-plate :item="items[1]" :key="items[1].name"></main-plate>
      </div>
    </div>
    <div class="extras">
      <extras></extras>
    </div>
    <div class="typeBurgers">
      <typeBurgers></typeBurgers>
    </div>
  </div>
</template>

<script>
import mainPlate from "./mainPlate.vue";
import extras from "./extras.vue";
import typeBurgers from "./typeBurgers.vue";

const imgSimpleBurger = require("@/assets/menu/simpleBurger.svg");
const imgDoubleBurger = require("@/assets/menu/doubleBurger.svg");

export default {
  name: "burgers",
  components: { mainPlate, extras, typeBurgers },
  data() {
    return {
      items: [
        {
          img: imgSimpleBurger,
          name: "Hamburguesa Simple",
          price: "10"
        },
        {
          img: imgDoubleBurger,
          name: "Hamburguesa Doble",
          price: "15"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables";

.burgers
  display: flex;
  flex-direction: column;
  margin: 10px;

.burger
  width: 70px;
  display: flex;
  align-items: center;

.titleburger
  color: $color-font-green;
  font-family: $secondaryFont;
  font-size: 22px;
  display: flex;
  justify-content: center;

.containerItems
  grid-template-columns: 1fr 1fr;
  display: grid;
</style>
