<template>
  <div class="extras">
    <span class="titleburger">EXTRAS</span>
    <div v-for="extra in extras" :key="extra.mainImg">
      <img class="imgExtras" :src="extra.mainImg" alt />
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
      extras: [
        {
          mainImg: imgCheese
        },
        {
          mainImg: imgEgg
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.imgExtras
  width: 65px;
  margin: 6px;
  padding-left: 25px;


#imgPlus
  margin-left: 9px;
  margin-right: 10px;

#imgCoin
  width: 45px;
  padding-top: 16px;

.extras
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  margin-left: 10px;
</style>
