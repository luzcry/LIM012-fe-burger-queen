<template>
  <div>
    <div class="containerBreakfast">
      <span class="titleBreakfast">DESAYUNOS</span>
      <div class="plate">
        <main-plate :item="items[0]" :key="items[0].name"></main-plate>
        <main-plate :item="items[1]" :key="items[1].name"></main-plate>
        <main-plate :item="items[2]" :key="items[2].name"></main-plate>
        <main-plate :item="items[3]" :key="items[3].name"></main-plate>
      </div>
      <div>
        <btn title="Enviar a resumen"></btn>
      </div>
    </div>
  </div>
</template>

<script>
import mainPlate from "./mainPlate.vue";
import btn from "../../components/btn.vue";

const imgCoffee = require("@/assets/menu/coffee.svg");
const imgSandwich = require("@/assets/menu/sandwich.svg");
const imgMilkCoffee = require("@/assets/menu/milkCoffee.png");
const juice = require("@/assets/menu/juice.svg");

export default {
  name: "breakfast",
  components: { mainPlate, btn },
  data() {
    return {
      items: [
        {
          img: imgCoffee,
          name: "Café americano",
          price: "5"
        },
        {
          img: imgSandwich,
          name: "Sándwich de jamón y queso",
          price: "10"
        },
        {
          img: imgMilkCoffee,
          name: "Café con leche",
          price: "7"
        },
        {
          img: juice,
          name: "Jugo de frutas natural",
          price: "7"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables";

.containerBreakfast
  display: flex;
  flex-direction: column;

.plate
  display: grid;
  grid-template-columns: 1fr 1fr;

.titleBreakfast
  color: $color-font-green;
  font-family: $secondaryFont;
  margin: 1rem;
  font-size: 22px;
  align-self: center;
</style>
