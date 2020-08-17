<template>
  <div class="typeBurgers">
    <div class="titleTypesburgers">
      <span class="titleburger">TIPOS DE HAMBURGUESA</span>
    </div>
    <div id="types">
      <div
        class="eachType"
        :class="protein == typeBurger.type ? 'typeActive' : 'typeInnactive'"
        v-for="typeBurger in typeBurgers"
        v-on:click="changeIndex(typeBurger.type)"
        :key="typeBurger.name"
      >
        <img class="imgItem" :src="typeBurger.img" alt />
        <span>{{ typeBurger.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
const imgChickenBurger = require("@/assets/menu/chicken-leg.svg");
const imgVeggieBurger = require("@/assets/menu/veggieBurger.svg");
const imgMeatBurger = require("@/assets/menu/meat.svg");

export default {
  name: "typeBurgers",
  components: {},
  data() {
    return {
      typeBurgers: [
        {
          img: imgChickenBurger,
          name: "Pollo",
          type: 1
        },
        {
          img: imgVeggieBurger,
          name: "Veggie",
          type: 2
        },
        {
          img: imgMeatBurger,
          name: "Carne",
          type: 3
        }
      ]
    };
  },
  methods: {
    changeIndex: function(index) {
      this.$emit("onClick", index);
    }
  },
  props: {
    protein: Number
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables"

.titleTypesburgers
  display: flex
  flex-direction: column

#types
  display: flex
  font-size: 18px

.typeBurgers
  display: flex
  flex-direction: column
  align-content: center
  justify-content: center
  color: $color-font-green

.eachType
  display: flex
  flex-direction: column
  text-align: center
  margin: 15px
  font-size: 18px
  color: $color-secondary-green
  font-weight: bold
  font-family: $basefont

.typeActive
  background-color: $color-light-pink
  padding: 10px;
  border-radius: 50px

.typeInnactive
  padding: 10px;
</style>
