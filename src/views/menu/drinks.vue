<template>
  <div>
    <span class="titleBtns">BEBIDAS</span>
    <div class="containerBreakfast" id="drinks">
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
        <main-plate
          @onClick="changeIndex(2)"
          :isActive="index == 2"
          :item="items[2]"
          :key="items[2].name"
        ></main-plate>
        <main-plate
          @onClick="changeIndex(3)"
          :isActive="index == 3"
          :item="items[3]"
          :key="items[3].name"
        ></main-plate>
      </div>
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
      index: 5,
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
  },
  methods: {
    changeIndex: function(index) {
      if (index == this.index) {
        this.index = 5;
      } else {
        this.index = index;
        console.log(this.index);
      }
    }
  }
};
</script>
<style lang="sass">
.titleDrinks
  display: flex

.positionBtnSend
  display: flex
  align-items: center
</style>
