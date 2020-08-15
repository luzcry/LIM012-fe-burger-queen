<template>
  <div
    v-on:click="selectPlate()"
    class="mainPlate"
    :class="isActive == true ? 'plateActive' : 'plateInnactive'"
  >
    <img class="imgItem" :src="item.img" alt />
    <span>{{ item.name }}</span>
    <span>S./ {{ item.price }}</span>
  </div>
</template>

<script>
export default {
  name: "mainPlate",
  props: {
    item: Object,
    isActive: Boolean
  },
  methods: {
    selectPlate: function() {
      this.$emit("onClick");
    }
  }
};
</script>
<style lang="sass">
@import "../../assets/scss/_variables"

.mainPlate
  display: flex
  flex-direction: column
  align-items: center
  margin: 1rem
  color: $color-secondary-green
  font-weight: bold
  font-size: 18px
  text-align: center
  font-family: $basefont

.imgItem
  width: 65px
  padding-bottom: 5px

.plateActive
  background-color: #fedae491
  padding: 10px
  border-radius: 50px
</style>
