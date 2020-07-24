<template>
  <div class="container">
    <div class="container-form">
      <form @submit.prevent="pressed" name="loginRegister" class="container-form">
        <label for="formLogin" class="title">¡Bienvenidx al sistema de pedidos de Valhalla's burger!</label>
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
        <btn title="Inicia sesión"></btn>
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
import btn from "../../components/btn";
import { loginUser } from "../../data/auth";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  components: {
    btn
  },
  methods: {
    async pressed() {
      try {
        await loginUser(this.email, this.password);
        this.$router.replace({ name: "listOfOrders" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style lang="sass">
@import "../../assets/scss/_variables.scss";

@media (min-width: 768px) and (max-width: 1280px)
  .container
    height: 100vh;
    font-family: $secondaryFont;
    display: grid
    grid-template-columns: 50% 50%;
  .container-form
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    justify-content: space-around;

  .title
    color: $color-font-green;
    font-family: $secondaryFont;
    margin-bottom: 2rem;
    font-size: 22px;
    display: flex;
    align-self: center;
  .account
    color: $color-secondary-green;
  .link
    text-decoration: none;
    font-weight: bolder;
    color: $color-font-green;
    cursor: pointer;
  .input
    border-style: none;
    border-bottom: 2px solid $color-secondary-green;
    margin: 1rem;
  ::placeholder
    color: $inputFont;
    font-family: $basefont;
  .input:focus
    outline: none;
  .input:active
    outline: none;
  .imgLogin
    display: grid;
    align-items: center;
    width: 300px;
</style>
