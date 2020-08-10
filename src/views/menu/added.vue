<template>
  <div>
    <span class="titleBtns">ACOMPAÑAMIENTOS</span>
    <div>
      <div class="plate">
        <main-plate :item="items[0]" :key="items[0].name"></main-plate>
        <main-plate :item="items[1]" :key="items[1].name"></main-plate>
      </div>
      <div class="containerResumeBtnExtras">
        <btn title="Enviar a resumen"></btn>
      </div>
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

<style lang="sass">
.containerResumeBtnExtras
  display: grid
  justify-content: center
</style>
