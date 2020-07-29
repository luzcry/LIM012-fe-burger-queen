<template>
  <div>
    <top-header></top-header>
    <div class="titleMenu">
      <h1>Menú</h1>
      <img class="imgMenu" src="../../assets/menu/menu.png" alt="menu" />
    </div>
    <div class="containerMenu">
      <div class="optionBtns">
        <div class="optionLeft">
          <btn title="Desayunos"></btn>
          <btn title="Hamburguesas"></btn>
        </div>
        <div class="optionRight">
          <btn title="Acompañamientos"></btn>
          <btn title="Bebidas"></btn>
        </div>
        <div class="btnViews">
          <div class="breakfast">
            <h2>Desayunos</h2>
            <div class="containerItems">
              <div class="optionLeft">
                <div class="item">
                  <img class="imgItems" src="../../assets/menu/coffee.svg" alt="coffee" />
                  <span>Café americano</span>
                  <span>S/.5</span>
                </div>
                <div class="item">
                  <img class="imgItems" src="../../assets/menu/sandwich.svg" alt="sandwich" />
                  <span>Sanwich de jamón y queso</span>
                  <span>S/.10</span>
                </div>
              </div>
              <div class="optionRight">
                <div class="item">
                  <img class="imgItems" src="../../assets/menu/milkCoffee.png" alt="milkCoffee" />
                  <span>Café con leche</span>
                  <span>S/.7</span>
                </div>
                <div class="item">
                  <img class="imgItems" src="../../assets/menu/juice.svg" alt="juice" />
                  <span>Jugo de frutas natural</span>
                  <span>S/.7</span>
                </div>
              </div>
            </div>
          </div>
          <div class="burgers"></div>
          <div class="added"></div>
          <div class="drinks"></div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import topheader from "../../components/top-header.vue";
import btn from "../../components/btn";
export default {
  name: "menu",
  components: { "top-header": topheader, btn }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)
    .titleMenu
        display: flex;
        justify-content: center;
        align-self: center;
        color: $color-font-green;
        font-famiy: $secondaryFont;
        font-size: 18px;

    .imgMenu
        padding-left: 10px;
        width: 55px;
        height: 70px;

    .containerMenu
        display: grid;
        grid-template-columns: 50% 50%
        justify-content: center;
        align-content: center;
        margin: 2rem;

    .containerResume
        width: 100%;
        display: flex;
        flex-direction: column;

    .resumeOrder
        color: $color-pink;
        font-family: $secondaryFont;
        display: flex;
        justify-content: center;
        font-size: 23px;
        border: 2px $color-light-pink solid;
        padding: 10px;

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
        margin-left: auto;
        margin-right: auto;

    .containerItems
        display: grid;
        grid-template-columns: 1fr 1fr;

    .imgItems
        width: 70px;
        height: 70px;

    .item
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;

    .breakfast
        display: flex;
        align-self: center;
        flex-direction: column;
</style>
