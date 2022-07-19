<template>
  <div>
    <div class="border d-flex w-100">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <b-container>
      <div
        class="
          login-box
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
      >
        <img src="bolao-logo-white.svg" alt="Logo Bolão" style="width: 18rem" />
        <div
          class="
            w-100
            d-flex
            flex-column
            justify-content-lg-start
            align-content-center
            mb-4
          "
        >
        <div
          class="
            w-100
            d-flex
            flex-column
            justify-content-lg-start
            align-content-center
            mb-4
          "
        >
          <h1 id="title-login">> CADASTRO</h1>
          <p>Faça o seu cadastro e divirta-se apostando</p>
        </div>
        <form @submit.prevent="cadastrar">
          <input
            required
            type="text"
            v-model="nome"
            class="form-control"
            placeholder="Nome"
          />
          <br />
          <input
            required
            type="text"
            v-model="sobrenome"
            class="form-control"
            placeholder="Sobrenome"
          />
          <br />
          <input
            required
            type="email"
            v-model="email"
            class="form-control"
            placeholder="E-mail"
          />
          <br />
          <input
            required
            type="text"
            v-model="telefone"
            class="form-control"
            placeholder="Telefone"
          />
          <br />
          <input
            id="password"
            required
            :type="passwordFieldType"
            v-model="senha"
            class="form-control mb-xl-3"
            placeholder="Senha"
          />
          <b-button
            :to="`/login`"
            type="submit"
            block
            variant="success"
            class="px-4 mb-3"
          >
            Cadastrar
          </b-button>
          <b-row>
            <b-col>
              <p class="mt-3 mb-3 text-center">
                Já possui conta?
                <nuxt-link :to="`/login`" class="login">Logar</nuxt-link>
              </p>
            </b-col>
          </b-row>
        </form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      senha: "",
      passwordFieldType: "password",
    };
  },
  methods: {
    cadastrar() {},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap");

:root {
  --primary-color: #13c75f;
  --text-color: #7e7e90;
  --sub-text-color: #ababc0;
  --second-color: #f2c94c;
  --danger-color: #eb5757;
  --details-color: #6a6180;
}

* {
  margin: 0;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  color: white;
  background-color: #f9f8f4;
}
</style>


<style scoped>
.border > span {
  width: 30%;
  height: 8px;
  display: block;
}
.border span:nth-child(1n),
span:nth-child(4n) {
  background-color: var(--second-color);
}
.border span:nth-child(2n),
span:nth-child(5n) {
  background-color: var(--primary-color);
}
.border span:nth-child(3n),
span:nth-child(6n) {
  background-color: var(--danger-color);
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: #d8d8d8;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  padding: 5rem;
}

#title-login {
  font-size: 1.7rem;
}

.login {
  color: var(--primary-color);
  font-weight: 400;
}
</style>
