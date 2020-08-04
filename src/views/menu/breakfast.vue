<template>
  <div class="containerItems">
    <main-plate :item="items[0]" :key="items[0].name"></main-plate>
    <main-plate :item="items[1]" :key="items[1].name"></main-plate>
    <main-plate :item="items[2]" :key="items[2].name"></main-plate>
    <main-plate :item="items[3]" :key="items[3].name"></main-plate>
  </div>
</template>

<script>
import mainPlate from "./mainPlate.vue";

const img1 = require("@/assets/menu/coffee.svg");
export default {
  name: "breakfast",
  components: { mainPlate },
  data() {
    return {
      items: [
        {
          img: img1,
          name: "Café americano",
          price: "5"
        },
        {
          img: "@/assets/menu/sandwich.svg",
          name: "Sándwich de jamón y queso",
          price: "10"
        },
        {
          img: "@/assets/menu/milkCoffee.png",
          name: "Café con leche",
          price: "7"
        },
        {
          img: "@/assets/menu/juice.svg",
          name: "Jugo de frutas natural",
          price: "7"
        }
      ]
    };
  }
};
</script>
