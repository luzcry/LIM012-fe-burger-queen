<template>
  <div class="container">
    <div class="imgInCard">
      <img
        v-if="order.status == 'En preparación'"
        src="../../assets/listsOfOrders/makingOrder.svg"
        alt="preparing"
      />
      <img
        v-else-if="order.status == 'En espera'"
        src="../../assets/listsOfOrders/time.svg"
        alt="preparing"
      />
      <img
        v-else-if="order.status == 'Listo para entregar'"
        src="../../assets/listsOfOrders/deliverPending.svg"
        alt="preparing"
      />
      <img
        v-else-if="order.status == 'Entregado'"
        src="../../assets/listsOfOrders/checkmark.svg"
        alt="preparing"
      />
      <div class="cardInfo">{{ order.numberOfOrder }} {{ order.status }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardItem",
  props: ["order"]
};
</script>

<style lang="sass"></style>
