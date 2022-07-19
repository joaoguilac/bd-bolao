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
        <img
          src="bolao-logo-white.svg"
          alt="Logo Bolão"
          style="width: 18rem"
        />
        <div
          class="
            w-100
            d-flex
            flex-column
            justify-content-lg-start
            align-content-center
            mb-3
          "
        >
          <h1 id="title-login">> ESQUECEU A SENHA</h1>
          <p>Digite sua nova senha</p>
        </div>
        <form @submit.prevent="login">
          <input
            required
            type="email"
            v-model="email"
            class="form-control mb-3"
            placeholder="E-mail"
          />
          <input
            id="password"
            required
            :type="passwordFieldType"
            v-model="senha"
            class="form-control mb-3"
            placeholder="Senha Antiga"
          />
          <input
            id="new-password"
            required
            :type="passwordFieldType"
            v-model="novaSenha"
            class="form-control mb-3"
            placeholder="Nova Senha"
          />

          <b-button
            :to="`/login`"
            type="submit"
            block
            variant="success"
            class="px-4"
          >
            Salvar
          </b-button>
        </form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "esqueceuSenha",
  data() {
    return {
      passwordFieldType: "password",
      email: "",
      senha: "",
      novaSenha: "",
    };
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
</style>

