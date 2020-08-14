<template>
  <div>
    <div class="cardInfoResume">
      <div id="titleOrder">{{ order.numberOfOrder }}</div>
      <div id="containerOrderKitchen">
        <div class="descriptionOrder">{{ order.description }}</div>
        <div>
          <btn
            class="btnListKitchen"
            v-if="index == 0"
            title="Empezar a preparar"
          ></btn>
          <btn
            class="btnListKitchen"
            v-if="index == 1"
            title="Marcar como listo"
          ></btn>
          <btn
            class="btnListKitchen"
            v-if="index == 2"
            :order="preparationTime"
            title="Marcar como entregado"
          ></btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "../../components/btn";
export default {
  name: "eachOrder",
  props: ["order"],
  components: { btn },
  data() {
    return {
      index: 0,
      orderStart: [
        {
          title: "Hora de inicio de pedido",
          hour: "13:00"
        }
      ],
      preparationTime: [
        {
          title: "Tiempo de preparación",
          hour: "12:00"
        }
      ],
      orderMaking: [
        {
          title: "Hora de inicio de preparación",
          hour: "11:00"
        }
      ]
    };
  },

  methods: {
    changeIndex: function(index) {
      this.index = index;
    }
  }
};
</script>

<style lang="sass">
@import "../../assets/scss/_variables.scss";

.cardInfoResume
  font-family: $secondaryFont;
  border: 2px solid $color-light-pink;
  margin: 1rem
  font-size: 20px;
  padding: 10px;

#titleOrder
  text-align: center;

#containerOrderKitchen
  display: flex;

.descriptionOrder
  padding: 10px;
  width: 200px;
</style>
