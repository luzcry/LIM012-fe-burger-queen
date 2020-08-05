<template>
  <div class="resumeOrder">
    <div class="containerResume">
      <span id="titleResume">Resumen de la compra</span>
      <div class="resumeTitles">
        <p class="eachTitleResume">Descripción</p>
        <p class="eachTitleResume">Precio</p>
        <p class="eachTitleResume">Cantidad</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resumeOrder"
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables";
.resumeOrder
  color: $color-pink;
  font-family: $secondaryFont;
  display: flex;
  justify-content: center;
  font-size: 23px;
  border: 2px $color-light-pink solid;
  padding: 10px;
  margin-top: 4px;

.resumeTitles
  color: $color-secondary-green;
  font-size: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr)

.eachTitleResume
  margin: 10px;
  justify-self: center;
  font-size: medium;
  font-height: bold;

#titleResume
  justify-content: center;
  display: flex;
</style>
