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
      <div v-on:click="changeIndex(2)" class="orders" id="ready">
        <span>PEDIDOS LISTOS PARA SERVIR</span>
        <img
          class="imgKitchen"
          src="../../assets/listsOfOrders/checkmark.svg"
          alt="check"
        />
      </div>
    </div>
    <div id="listOrders">
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
          numberOfOrder: "Pedido n° 5",
          description: "preparando",
          orderMaking: "15:00"
        },
        {
          numberOfOrder: "Pedido n° 6",
          description: "preparando",
          orderMaking: "15:30"
        }
      ],
      readyOrders: [
        {
          numberOfOrder: "Pedido n°7",
          description: "Listo para servir",
          preparationTime: "20min"
        },
        {
          numberOfOrder: "Pedido n°8",
          description: "Listo para servir",
          preparationTime: "10min"
        }
      ],
      pendingOrders: [
        {
          numberOfOrder: "Pedido n°1",
          description: "1 hamburguesa simple de pollo",
          orderStart: "14:00"
        },
        {
          numberOfOrder: "Pedido n°2",
          description: "En preparación"
        },
        {
          numberOfOrder: "Pedido n°3",
          description: "Listo para entregar",
          orderStart: "14:00"
        },
        {
          numberOfOrder: "Pedido n°4",
          description: "Entregado",
          orderStart: "14:00"
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

  #listOrders
    width: 450px;
    padding: 10px;
</style>
