<template>
  <div>
    <top-header></top-header>
    <div class="titleMenu">
      <h1>COCINA</h1>
      <img
        class="imgMenu"
        src="../../assets/listsOfOrders/chefKitchen.svg"
        alt="kitchen"
      />
    </div>
    <div class="containerKitchen">
      <div class="pendingOrders">
        <span>PEDIDOS PENDIENTES</span>
        <img
          class="imgKitchen"
          src="../../assets/listsOfOrders/time.svg"
          alt="clock"
        />
      </div>
      <div class="makingOrders">
        <span>PEDIDOS EN PREPARACIÓN</span>
        <img
          class="imgKitchen"
          src="../../assets/listsOfOrders/makingOrder.svg"
          alt="making"
        />
      </div>
      <div class="readyOrders">
        <span>PEDIDOS LISTOS PARA SERVIR</span>
        <img
          class="imgKitchen"
          src="../../assets/listsOfOrders/checkmark.svg"
          alt="check"
        />
      </div>
    </div>
  </div>
</template>

<script>
import topheader from "../../components/top-header.vue";

export default {
  name: "kitchen",
  components: { "top-header": topheader }
};
</script>

<style lang="sass" scoped>
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)
    .containerKitchen
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-size: 18px;
        color: $color-font-green;

    .imgKitchen
        width: 50px;
        padding-left: 6px;

    .readyOrders
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $color-pink;

    .makingOrders
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $color-pink;

    .pendingOrders
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $color-pink;
</style>
