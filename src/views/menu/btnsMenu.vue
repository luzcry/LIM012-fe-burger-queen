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
    <breakfast v-if="index == 0"></breakfast>
  </div>
</template>
<script>
import btn from "../../components/btn";
import breakfast from "./breakfast.vue";
export default {
  name: "btnsMenu",
  components: { btn, breakfast },
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
