<template>
  <div class="optionBtns">
    <div class="optionLeft">
      <btn @onClick="changeIndex(0)" title="Desayunos"></btn>
      <btn @onClick="changeIndex(1)" title="Hamburguesas"></btn>
    </div>
    <div class="optionRight">
      <btn @onClick="changeIndex(2)" title="Acompañamientos"></btn>
      <btn @onClick="changeIndex(3)" title="Bebidas"></btn>
    </div>
    <breakfast @onClick="changeIndex" v-if="index == 0"></breakfast>
    <burgers v-if="index == 1"></burgers>
    <added v-if="index == 2"></added>
    <drinks v-if="index == 3"></drinks>
  </div>
</template>
<script>
import btn from "../../components/btn";
import breakfast from "./breakfast.vue";
import burgers from "./burgers.vue";
import added from "./added.vue";
import drinks from "./drinks.vue";

export default {
  name: "btnsMenu",
  components: { btn, breakfast, burgers, added, drinks },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    changeIndex: function(index) {
      this.index = index;
    }
  }
};
</script>
<style lang="sass"></style>
