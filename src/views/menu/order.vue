<template>
  <div class="containerOrderResume">
    <span>{{ order.description }}</span>
    <span>{{ order.price }}</span>
    <div>
      <img class="cuantityIcons" src="../../assets/menu/minusQuantity.svg" alt="minus" />
      <span>{{ order.cuantity }}</span>
      <img class="cuantityIcons" src="../../assets/menu/addQuantity.svg" alt="plus" />
    </div>
    <img id="deleteIcon" src="../../assets/menu/trash.svg" alt="delete" />
  </div>
</template>

<script>
export default {
  name: "order",
  props: {
    order: Object
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables";

.containerOrderResume
  color: $color-secondary-green
  font-family: $basefont
  font-size: 20px;
  display: grid;
  grid-template-columns: 40% 25% 25% 10%;
  text-align: center
  padding: 4px;

.cuantityIcons
  width: 13px;
  padding: 0 2px;
  cursor: pointer

#deleteIcon
  width: 20px;
  padding: 0 2px;
  cursor: pointer
</style>
