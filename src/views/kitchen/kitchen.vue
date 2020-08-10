<template>
  <div>
    <top-header :isActive="true" title="COCINA"></top-header>
    <div class="containerKitchen">
      <div v-on:click="changeIndex(0)" class="orders" id="pending">
        <span>PEDIDOS PENDIENTES</span>
        <img
          class="imgKitchen"
          src="../../assets/listsOfOrders/time.svg"
          alt="clock"
        />
      </div>
      <div v-on:click="changeIndex(1)" class="orders" id="making">
        <span>PEDIDOS EN PREPARACIÓN</span>
        <img
          class="imgKitchen"
          src="../../assets/listsOfOrders/makingOrder.svg"
          alt="making"
        />
      </div>
      <div v-on:click="changeIndex(3)" class="orders" id="ready">
        <span>PEDIDOS LISTOS PARA SERVIR</span>
        <img
          class="imgKitchen"
          src="../../assets/listsOfOrders/checkmark.svg"
          alt="check"
        />
      </div>
      <list-orders v-if="index == 0" :list="pendingOrders"></list-orders>
      <list-orders v-if="index == 1" :list="makingOrders"></list-orders>
      <list-orders v-if="index == 2" :list="readyOrders"></list-orders>
    </div>
  </div>
</template>

<script>
import topheader from "../../components/top-header.vue";
import listOrders from "./listOrders";

export default {
  name: "kitchen",
  components: {
    "top-header": topheader,
    listOrders
  },
  data() {
    return {
      index: 0,
      makingOrders: [
        {
          numberOfOrder: "mimi",
          description: "En espera"
        }
      ],
      readyOrders: [
        {
          numberOfOrder: "Pedido ",
          description: "En espera"
        }
      ],
      pendingOrders: [
        {
          numberOfOrder: "Pedido n°1",
          description: "1 hamburguesa simple de pollo"
        },
        {
          numberOfOrder: "Pedido n°2",
          description: "En preparación"
        },
        {
          numberOfOrder: "Pedido n°3",
          description: "Listo para entregar"
        },
        {
          numberOfOrder: "Pedido n°4",
          description: "Entregado"
        }
      ]
    };
  },

  methods: {
    changeIndex: function(index) {
      this.index = index;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/scss/_variables.scss"

@media (min-width: 768px) and (max-width: 1280px)
  .containerKitchen
    display: grid
    grid-template-columns: repeat(3, 1fr)
    font-size: 18px
    color: $color-font-green

  .imgKitchen
    width: 45px
    height: 40px
    padding-left: 3px

  .imgTitle
    padding-bottom: 21px
    width: 55px

  .orders
    display: flex
    text-align: center
    border: 1px solid $color-pink
    padding: 7px
    font-family: $secondaryFont
    justify-content: center
    align-items: center

  .titleMenu
    font-family: $basefont
</style>
