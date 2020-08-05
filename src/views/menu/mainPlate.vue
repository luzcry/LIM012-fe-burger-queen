<template>
  <div class="mainPlate">
    <img class="imgItem" :src="item.img" alt />
    <span>{{ item.name }}</span>
    <span>S./ {{ item.price }}</span>
  </div>
</template>

<script>
export default {
  name: "mainPlate",
  props: {
    item: Object
  }
};
</script>
<style lang="sass">
@import "../../assets/scss/_variables";

.mainPlate
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  color: $color-secondary-green
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  font-family: $basefont;

.imgItem
  width: 65px;
</style>
