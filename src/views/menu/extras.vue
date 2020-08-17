<template>
  <div class="extras">
    <span class="titleburger">EXTRAS</span>
    <div
      :class="hasCheese ? 'extraActive' : 'extraInnactive'"
      v-on:click="onClickCheese"
    >
      <img class="imgExtras" :src="imgCheese" alt />
      <img id="imgPlus" src="@/assets/menu/plus.svg" alt="plusLogo" />
      <img id="imgCoin" src="@/assets/menu/coin.svg" alt="coin" />
    </div>
    <div
      :class="hasEgg ? 'extraActive' : 'extraInnactive'"
      v-on:click="onClickEgg"
    >
      <img class="imgExtras" :src="imgEgg" alt />
      <img id="imgPlus" src="@/assets/menu/plus.svg" alt="plusLogo" />
      <img id="imgCoin" src="@/assets/menu/coin.svg" alt="coin" />
    </div>
  </div>
</template>

<script>
const imgCheese = require("@/assets/menu/cheese.svg");
const imgEgg = require("@/assets/menu/fried-egg.svg");

export default {
  name: "extras",
  data() {
    return {
      imgCheese,
      imgEgg
    };
  },
  props: {
    hasCheese: Boolean,
    hasEgg: Boolean
  },
  methods: {
    onClickCheese: function() {
      this.$emit("onClickCheese");
    },
    onClickEgg: function() {
      this.$emit("onClickEgg");
    }
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables"

.extraActive
  background-color: $color-light-pink
  width: 200px
  border-radius: 50px

.imgExtras
  width: 65px
  margin: 6px
  padding-left: 15px

#imgPlus
  margin-left: 9px
  margin-right: 10px

#imgCoin
  width: 45px
  padding-top: 16px

.extras
  display: flex
  flex-direction: column
  padding-top: 5px
  margin-left: 10px
</style>
