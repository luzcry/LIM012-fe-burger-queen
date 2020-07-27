<template>
  <div>
    <top-header></top-header>
    <div class="listOfOrders">
      <h1>Lista de pedidos</h1>
      <img src="../../assets/listsOfOrders/list.svg" alt="list" />
    </div>
    <div class="newOrderAdd">
      <router-link class="linkAdd" to="/newOrder">
        <img id="addImg" src="../../assets/listsOfOrders/addNew.svg" alt="addNewOrder" />
        <span>Agregar nuevo pedido</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import topheader from "../../components/top-header.vue";
export default {
  name: "listOfOrders",
  components: { "top-header": topheader }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)

  .listOfOrders
    border: 2px $color-light-pink solid;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    color: $color-font-green;

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
</style>
