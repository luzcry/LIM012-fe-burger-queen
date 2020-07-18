<!--<template>
  <div>
    logged in
    <span v-if="loggedIn">yes</span>
    <span v-else>No</span>
    <div>
      <button @click="signOut">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
import { auth } from "../../firebase.config";
export default {
  name: "top-header",
  mounted() {
    this.setupFiresbase();
  },
  methods: {
    setupFiresbase() {
      auth.onAuthStateChanged(user => {
        //this.loggedIn = !!user;
        if (user) {
          this.loggedIn = true;
        } else {
          this.logged = false;
        }
      });
    },
    async signOut() {
      try {
        const data = await auth.signOut();
        console.log(data);
        this.$router.replace({ name: "listOfOrders" });
      } catch (err) {
        console.log(err);
      }
    }
  },

  data() {
    return {
      loggedIn: false
    };
  }
};
</script> -->
