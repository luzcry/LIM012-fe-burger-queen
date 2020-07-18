<template>
  <div class="container">
    <div class="container-form">
      <form
        @submit.prevent="pressed"
        name="loginRegister"
        class="container-form"
      >
        <label for="formLogin" class="title"
          >¡Bienvenidx al sistema de pedidos de Valhalla's burger!</label
        >
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          v-model="email"
          class="input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          v-model="password"
          class="input"
          required
        />
        <button type="submit" class="btn">Inicia sesión</button>
      </form>
      <div class="error" v-if="error">{{ error.message }}</div>
      <span class="account">
        ¿No tienes cuenta?
        <router-link class="link" to="/register">Regístrate</router-link>
      </span>
    </div>
    <div class="imgLogin">
      <img src="../../assets/login/loginImg.svg" alt="image login" />
    </div>
  </div>
</template>
<script>
import { auth } from "../../../firebase.config";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async pressed() {
      try {
        console.log(this.password);
        const signIn = await auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        console.log(signIn);
        this.$router.replace({ name: "listOfOrders" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style lang="sass" scoped>
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1023px)
  .container
    font-family: $secondaryFont;
    display: grid
    grid-template-columns: 60% 40%;
  .container-form
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    justify-content: center;
  .title
    color: $color-font-green;
    font-style: $secondaryFont;
    margin-bottom: 2rem;
  .account
    color: $color-secondary-green;
  .link
    text-decoration: none;
    font-weight: bolder;
    color: $color-font-green;
  .input
    width: 50%;
    border-style: none;
    border-bottom: 2px solid $color-secondary-green;
    margin-bottom: 2rem;
  ::placeholder
    color: $inputFont;
    font-family: $basefont;
  .input:focus
    outline: none;
  .input:active
    outline: none;
  .imgLogin
</style>
