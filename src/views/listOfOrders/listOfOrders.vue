<template>
  <div>
    <top-header></top-header>
    <div class="listOfOrders">
      <div class="titleList">
        <h1>Lista de pedidos</h1>
        <img src="../../assets/listsOfOrders/list.svg" alt="list" />
      </div>
      <div class="order">
        <card-item v-for="order in orders" :order="order" :key="order.status" />
      </div>
    </div>
    <div class="newOrderAdd">
      <router-link class="linkAdd" to="/newOrder">
        <img
          id="addImg"
          src="../../assets/listsOfOrders/addNew.svg"
          alt="addNewOrder"
        />
        <span>Agregar nuevo pedido</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import topheader from "../../components/top-header.vue";
import cardItem from "../../views/cardItem/cardItem.vue";
export default {
  name: "listOfOrders",
  components: { "top-header": topheader, cardItem },
  data: function() {
    return {
      orders: [
        {
          numberOfOrder: "Pedido n°1",
          status: "En espera"
        },
        {
          numberOfOrder: "Pedido n°2",
          status: "En preparación"
        },
        {
          numberOfOrder: "Pedido n°3",
          status: "Listo para entregar"
        },
        {
          numberOfOrder: "Pedido n°4",
          status: "Entregado"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)

  .listOfOrders
    border: 2px $color-light-pink solid;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    color: $color-font-green;

  .titleList
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

  .newOrderAdd
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
    cursor: pointer;

  #addImg
    width: 55px;
    margin: 1rem;

  .linkAdd
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $color-font-green;

  .order
    font-size: 25px;
    color: $color-font-green;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
</style>
