<template>
  <div>
    <span class="titleBtns">DESAYUNOS</span>
    <div class="containerBreakfast">
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
      <div>
        <button class="btnResume">Enviar a resumen</button>
      </div>
    </div>
  </div>
</template>

<script>
import mainPlate from "./mainPlate.vue";

const imgCoffee = require("@/assets/menu/coffee.svg");
const imgSandwich = require("@/assets/menu/sandwich.svg");
const imgMilkCoffee = require("@/assets/menu/milkCoffee.png");
const juice = require("@/assets/menu/juice.svg");

export default {
  name: "breakfast",
  components: { mainPlate },
  data() {
    return {
      index: 4,
      items: [
        {
          img: imgCoffee,
          name: "Café americano",
          price: "5"
        },
        {
          img: imgSandwich,
          name: "Sándwich",
          price: "10"
        },
        {
          img: imgMilkCoffee,
          name: "Café con leche",
          price: "7"
        },
        {
          img: juice,
          name: "Jugo de frutas",
          price: "7"
        }
      ]
    };
  },
  methods: {
    changeIndex: function(index) {
      if (index == this.index) {
        this.index = 4;
      } else {
        this.index = index;
        console.log(this.index);
      }
    },
    sendToRensume: function() {
      if (this.index != 4) {
        this.$emit("addBreakfast", this.items[this.index]);
      }
    }
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables"

.containerBreakfast
  display: flex
  flex-direction: column
  align-items: center

.plate
  display: grid
  grid-template-columns: 1fr 1fr

.titleBtns
  color: $color-font-green
  font-family: $secondaryFont
  margin: 1rem
  font-size: 22px
  display: flex
  justify-content: center

.btnResume
  border: none
  border-radius: 20px
  padding: 10px
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  color: $color-pink
  background-color: $color-light-pink
  font-family: $secondaryFont
  font-size: 18px
  font-weight: bold
  cursor: pointer
  margin: 1rem;

.btnResume:focus
  outline-color: transparent
  outline-style: none

.btnResume:active
  outline-color: transparent
  outline-style: none
  -webkit-tap-highlight-color: rgba(0,0,0,0)
</style>
