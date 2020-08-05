<template>
  <div class="containerBreakfast">
    <span class="titleBreakfast">BEBIDAS</span>
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
</template>

<script>
import mainPlate from "./mainPlate.vue";
import btn from "../../components/btn.vue";

const imgSodaCan = require("@/assets/menu/sodaCan500ml.png");
const imgWater500ml = require("@/assets/menu/bottleWater500ml.png");
const imgWater700ml = require("@/assets/menu/bottleWater750ml.png");
const imgCola700ml = require("@/assets/menu/cola700ml.png");

export default {
  name: "drinks",
  components: { mainPlate, btn },
  data() {
    return {
      items: [
        {
          img: imgSodaCan,
          name: "Gaseosa 500 ml",
          price: "7"
        },
        {
          img: imgWater500ml,
          name: "Agua 500 ml",
          price: "5"
        },
        {
          img: imgWater700ml,
          name: "Agua 700 ml",
          price: "10"
        },
        {
          img: imgCola700ml,
          name: "Gaseosa 700 ml",
          price: "10"
        }
      ]
    };
  }
};
</script>
