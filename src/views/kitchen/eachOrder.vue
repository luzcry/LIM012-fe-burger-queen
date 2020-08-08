<template>
  <div>
    <div class="cardInfo">
      <div class="titleOrder">{{ order.numberOfOrder }}</div>
      <div class="descriptionOrder">{{ order.description }}</div>
      <div class="btn">
        <btn title="Bebidas"></btn>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "../../components/btn";
export default {
  name: "eachOrder",
  props: ["order"],
  methods: { btn }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss";

.cardInfo
  font-family: $secondaryFont;
  border: 2px solid $color-light-pink;
</style>
