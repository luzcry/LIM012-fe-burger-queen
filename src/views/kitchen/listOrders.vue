<template>
  <div>
    <each-order v-for="order in list" :order="order" :key="order.description" />
  </div>
</template>
<script>
import eachOrder from "./eachOrder";
export default {
  name: "listOrders",
  props: ["list"],
  components: {
    eachOrder
  }
};
</script>
