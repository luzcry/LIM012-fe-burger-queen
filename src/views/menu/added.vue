<template>
  <div class="containerBreakfast">
    <span class="titleBreakfast">ACOMPAÑAMIENTOS</span>
    <div class="plate">
      <main-plate :item="items[0]" :key="items[0].name"></main-plate>
      <main-plate :item="items[1]" :key="items[1].name"></main-plate>
    </div>
    <div>
      <btn title="Enviar a resumen"></btn>
    </div>
  </div>
</template>

<script>
import mainPlate from "./mainPlate.vue";
import btn from "../../components/btn.vue";

const imgOnionRings = require("@/assets/menu/onion.svg");
const imgFries = require("@/assets/menu/fried-potatoes.svg");

export default {
  name: "added",
  components: { mainPlate, btn },
  data() {
    return {
      items: [
        {
          img: imgOnionRings,
          name: "Aros de cebolla",
          price: "5"
        },
        {
          img: imgFries,
          name: "Papas fritas",
          price: "5"
        }
      ]
    };
  }
};
</script>
