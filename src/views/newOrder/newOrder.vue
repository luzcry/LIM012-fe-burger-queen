<template>
  <div>
    <top-header></top-header>
    <div class="containerOrder">
      <div class="newOrder">
        <img src="../../assets/newOrder/newOrder.svg" alt="newOrder" />
        <h1 id="titleNewOrder">Agregar nuevo pedido</h1>
        <form class="formOrder" @submit.prevent="pressed">
          <input
            class="input"
            type="text"
            name="clientName"
            id="clientName"
            placeholder="Nombre del cliente"
          />
          <input class="input" type="number" placeholder="N° de mesa" />
          <router-link to="/menu">
            <btn title="Iniciar pedido"></btn>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import topheader from "../../components/top-header.vue";
import btn from "../../components/btn";
export default {
  name: "newOrder",
  components: { "top-header": topheader, btn }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)
  .containerOrder
    border: 2px $color-light-pink solid;
    color: $color-font-green;
    width: 70%;
    margin-left: auto;
    margin-right: auto;

  .newOrder
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

  #titleNewOrder
    font-family: $basefont;

  .formOrder
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
</style>
