<template>
  <div class="mainPlate">
    <img :src="item.img" alt />
    <span>{{ item.name }}</span>
    <span>S./ {{ item.price }}</span>
  </div>
</template>

<script>
export default {
  name: "mainPlate",
  props: {
    item: Object
  }
};
</script>
