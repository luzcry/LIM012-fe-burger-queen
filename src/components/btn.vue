<template>
  <button v-on:click="onClick" class="btn">{{ title }}</button>
</template>

<script>
export default {
  name: "btn",
  props: {
    title: String
  },
  methods: {
    onClick: function() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="sass">
@import "../assets/scss/_variables.scss";
.btn
  border: none
  border-radius: 20px;
  padding: 10px;
  margin: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: $color-pink;
  background-color: $color-light-pink;
  font-family: $secondaryFont;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
.btn:focus
  outline-color: transparent;
  outline-style: none;
</style>
