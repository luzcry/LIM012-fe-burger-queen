<template>
  <div class="containerList">
    <div class="imgInCard">
      <img
        class="imgList"
        v-if="order.status == 'En preparación'"
        src="../../assets/listsOfOrders/makingOrder.svg"
        alt="preparing"
      />
      <img
        class="imgList"
        v-else-if="order.status == 'En espera'"
        src="../../assets/listsOfOrders/time.svg"
        alt="preparing"
      />
      <img
        class="imgList"
        v-else-if="order.status == 'Listo para entregar'"
        src="../../assets/listsOfOrders/deliverPending.svg"
        alt="preparing"
      />
      <img
        class="imgList"
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

<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)

  .imgList
    width: 40px;
    padding: 1rem;

  .imgInCard
    display: flex;
    align-items: center;

  .cardInfo
    font-family: $secondaryFont;
</style>
