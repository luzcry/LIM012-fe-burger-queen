<template>
  <div class="resumeOrder">
    <div class="containerResume">
      <span id="titleResume">Resumen de la compra</span>
      <div class="resumeTitles">
        <p class="eachTitleResume">Descripción</p>
        <p class="eachTitleResume">Precio</p>
        <p class="eachTitleResume">Cantidad</p>
      </div>
    </div>
    <order v-for="order in orders" :order="order" :key="order.description">{{ order }}</order>
  </div>
</template>

<script>
import order from "./order.vue";
export default {
  name: "resumeOrder",
  components: {
    order
  },
  props: ["orders"]
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables";

.resumeOrder
  color: $color-pink;
  font-family: $secondaryFont;
  justify-content: center;
  font-size: 23px;
  border: 2px $color-light-pink solid;
  padding: 10px;
  margin-top: 4px;
  width: 350px;

.resumeTitles
  color: $color-font-green;
  font-size: 12px;
  display: grid;
  grid-template-columns: 40% 25% 25% 10%;

.eachTitleResume
  justify-self: center;
  font-size: medium;
  font-height: bold;

#titleResume
  justify-content: center;
  display: flex;
</style>
