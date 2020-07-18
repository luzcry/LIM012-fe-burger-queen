<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="email" placeholder="E-mail" />
      </div>
      <div>
        <input type="password" v-model="password" placeholder="Contraseña" />
      </div>
      <button class="btn" type="submit">Registrarse</button>
    </form>
    <span>
      ¿Ya tienes cuenta?
      <router-link to="/login">Inicia sesión</router-link>
    </span>
  </div>
</template>

<script>
import { auth } from "../../../firebase.config";

export default {
  methods: {
    async pressed() {
      try {
        const user = await auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        console.log(user);
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
  }
};
</script>
<style></style>
