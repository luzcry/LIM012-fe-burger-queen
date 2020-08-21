<template>
  <div class="containerItems">
    <div class="burgers">
      <div>
        <span class="titleburger">HAMBURGUESAS</span>
      </div>
      <div class="burger">
        <main-plate
          @onClick="addBurger(0)"
          :isActive="isSimple == 0"
          :item="items[0]"
          :key="items[0].name"
        ></main-plate>
        <main-plate
          @onClick="addBurger(1)"
          :isActive="isSimple == 1"
          :item="items[1]"
          :key="items[1].name"
        ></main-plate>
      </div>
    </div>
    <div class="extras">
      <extras
        @onClickEgg="addEgg"
        @onClickCheese="addCheese"
        :hasCheese="hasCheese"
        :hasEgg="hasEgg"
      ></extras>
    </div>
    <div class="typeBurgers">
      <typeBurgers @onClick="changeIndex" :protein="protein"></typeBurgers>
    </div>
    <div class="containerBtnResumeBurger">
      <btn @onClick="addToList" title="Enviar a resumen"></btn>
    </div>
  </div>
</template>

<script>
import mainPlate from "./mainPlate.vue";
import extras from "./extras.vue";
import typeBurgers from "./typeBurgers.vue";
import btn from "../../components/btn.vue";

const imgSimpleBurger = require("@/assets/menu/simpleBurger.svg");
const imgDoubleBurger = require("@/assets/menu/doubleBurger.svg");

export default {
  name: "burgers",
  components: { mainPlate, extras, typeBurgers, btn },
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
      ],
      isSimple: 3,
      description: "",
      price: 0,
      hasEgg: false,
      hasCheese: false,
      protein: 0
    };
  },
  methods: {
    changeIndex: function(protein) {
      if (protein == this.protein) {
        this.protein = 0;
      } else {
        this.protein = protein;
        console.log(this.protein);
      }
    },
    addBurger: function(index) {
      if (index == this.isSimple) {
        this.description = "";
        this.price = 0;
        this.isSimple = 3;
      } else {
        this.description = this.items[index].name;
        this.price = this.items[index].price;
        this.isSimple = index;
      }
      console.log(this.description);
    },
    addCheese: function() {
      this.hasCheese = !this.hasCheese;
    },
    addEgg: function() {
      this.hasEgg = !this.hasEgg;
    },
    addToList: function() {
      const proteinName =
        this.protein == 1 ? "Pollo" : this.protein == 2 ? "Veggie" : "Carne";
      const newName = this.description + " " + proteinName;
      const item = {
        description: newName,
        price: this.price,
        hasCheese: this.hasCheese,
        hasEgg: this.hasEgg
      };
      this.$parent.$emit("addToList", item);
    }
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables"

.burgers
  display: flex
  flex-direction: column
  margin: 10px

.burger
  width: 70px
  display: flex
  align-items: center

.titleburger
  color: $color-font-green
  font-family: $secondaryFont
  font-size: 22px
  display: flex
  justify-content: center
  text-align: center
  margin: 8px
  padding-right: 30px

.containerItems
  grid-template-columns: 1fr 1fr
  display: grid

.containerBtnResumeBurger
  display: flex
  align-self: center
  justify-content: center
</style>
