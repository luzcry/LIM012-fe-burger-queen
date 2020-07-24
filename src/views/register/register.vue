<template>
  <div class="container">
    <div class="container-form">
      <form
        @submit.prevent="pressed"
        name="loginRegister"
        class="container-form"
      >
        <label for="formLogin" class="title"
          >¡Registrate al sistema de pedidos de Valhalla's burger!</label
        >
        <!-- <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Nombre de usuario"
          v-model="userName"
          class="input"
          required
        />-->
        <input
          class="input"
          type="email"
          v-model="email"
          placeholder="E-mail"
          required
        />
        <input
          class="input"
          type="password"
          v-model="password"
          placeholder="Contraseña"
          required
        />
        <div class="optionArea">
          <span class="title">Elige tu área</span>
          <div class="imageOptions">
            <div class="optionRegister">
              <img
                class="imageSizeHat"
                src="../../assets/register/cookHatKitchen.svg"
                alt="kitchen"
              />
              <p>COCINA</p>
            </div>
            <div class="optionRegister">
              <img
                class="imageSizeWaiter"
                src="../../assets/register/waitress.svg"
                alt="waiter"
              />
              <p>MESAS</p>
            </div>
          </div>
        </div>
        <btn title="Registrarse"></btn>
      </form>
      <span class="account">
        ¿Ya tienes cuenta?
        <router-link class="link" to="/login">Inicia sesión</router-link>
      </span>
    </div>
    <div class="register">
      <img
        class="imgRegister"
        src="../../assets/register/burgerRegister.svg"
        alt="image login"
      />
    </div>
    <div v-if="error" class="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { createUser } from "../../data/auth";
import btn from "../../components/btn";

export default {
  methods: {
    async pressed() {
      try {
        await createUser(this.email, this.password);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    }
  },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  components: {
    btn
  }
};
</script>
<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)
  .register
    display: grid;
    flex-direction: column;
    align-items: center;
  .imgRegister
    width: 250px;
  .imageSizeWaiter
    width: 70px;
  .imageSizeHat
    width: 83px
  .optionArea
    display: flex;
    flex-direction: column;
  .imageOptions
    display: flex;
    flex-direction: row;
    align-items: center;
  .optionRegister
    color: $color-font-green;
    font-family: $basefont;
    display: flex;
    flex-direction: column;
    align-items: center;
</style>
