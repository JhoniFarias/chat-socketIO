<template>
  <div class="d-flex justify-content-center align-items-center container h-100">
    <div class="row justify-content-center align-items-center h-100 w-100">
      <div class="col-md-6">
        <img
          src="https://blog.bsource.com.br/assets/img/programador.gif"
          class="img-fluid rounded"
          alt="Cinque Terre"
        />
      </div>
      <div class="col-md-6">
        <form class="form-signin">
          <h1
            class="h3 font-weight-normal text-center text-secondary"
            style="font-style: oblique"
          >
            <strong>Chat via Socket</strong>
          </h1>
          <input
            type="text"
            id="inputEmail"
            class="form-control"
            placeholder="Nome de usuario"
            required=""
            autofocus=""
            v-model="user"
          />
          <input
            type="password"
            id="inputPassword"
            class="form-control mt-2"
            placeholder="Senha"
            required=""
            v-model="password"
          />
          <input
            type="button"
            class="btn btn-outline-primary btn-block mt-3"
            value="Enviar"
            @click="login()"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8082/authenticate", {
          user: this.user,
          passwd: this.password,
        })
        .then((res) => {
          if (res.data.status === 200) {
            this.$emit("authenticated", true);
            sessionStorage.setItem("LoggedUser", res.data.result.user) //TODO: implementar utilizando Vuex
            this.$router.replace({ name: "chat" });
          }
        });
    },
  },
};
</script>
<style>
</style>
