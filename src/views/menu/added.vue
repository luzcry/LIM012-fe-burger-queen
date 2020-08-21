<template>
  <div>
    <span class="titleBtns">ACOMPAÑAMIENTOS</span>
    <div>
      <div class="plate">
        <main-plate
          @onClick="changeIndex(0)"
          :isActive="index == 0"
          :item="items[0]"
          :key="items[0].name"
        ></main-plate>
        <main-plate
          @onClick="changeIndex(1)"
          :isActive="index == 1"
          :item="items[1]"
          :key="items[1].name"
        ></main-plate>
      </div>
      <div class="containerResumeBtnExtras">
        <button class="btnResume">Enviar a resumen</button>
      </div>
    </div>
  </div>
</template>

<script>
import mainPlate from "./mainPlate.vue";

const imgOnionRings = require("@/assets/menu/onion.svg");
const imgFries = require("@/assets/menu/fried-potatoes.svg");

export default {
  name: "added",
  components: { mainPlate },
  data() {
    return {
      index: 3,
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
  },
  methods: {
    changeIndex: function(index) {
      if (index == this.index) {
        this.index = 3;
      } else {
        this.index = index;
        console.log(this.index);
      }
    }
  }
};
</script>

<style lang="sass">
.containerResumeBtnExtras
  display: grid
  justify-content: center
</style>
