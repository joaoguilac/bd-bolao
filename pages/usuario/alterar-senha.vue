<template>
  <div>
    <Border></Border>
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
          src="/bolao-logo-white.svg"
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
          <h1 id="title-login">> REDEFINIR SENHA</h1>
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
            class="px-4 bold"
          >
            SALVAR
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

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: var(--background-box);
  border: 1px solid var(--background-box);
  border-radius: 10px;
  padding: 5rem;
}

#title-login {
  font-size: 1.7rem;
}
</style>

