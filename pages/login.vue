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
          style="color: white"
        >
          <h1 id="title-login">> LOGIN</h1>
          <p>Faça o login para começar a apostar</p>
        </div>
        <form @submit.prevent="login">
          <input
            required
            type="email"
            v-model="email"
            class="form-control"
            placeholder="E-mail"
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
            type="submit"
            block
            variant="success"
            class="px-4 mb-3 bold"
          >
            ENTRAR
          </b-button>
          <b-row>
            <b-col>
              <p class="mt-3 mb-3 text-center" style="color: white">
                Ainda não tem conta?
                <nuxt-link :to="`/registro`" class="cadastro"
                  >Cadastre-se</nuxt-link
                >
              </p>
            </b-col>
          </b-row>
        </form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      passwordFieldType: "password",
    };
  },
  methods: {
    login() {
      this.$axios.post("/auth/login", {
        email: this.email,
        senha: this.senha,
      }).then((response)=>{
        this.$bvToast.toast("Login realizado com sucesso!", {
          title: "Login",
          autoHideDelay: 2000,
          variant: "success",
          appendToast: true,
        });
        this.$router.push("/home")
        localStorage.setItem("token", response.data.token)
      }).catch((error)=>{
        console.log(error)

        this.$bvToast.toast(error.response.data.message, {
          title: "Erro",
          variant: "danger",
          solid: true,
          toast: true,
          autoHideDelay: 5000,
          appendToast: true,
        });
      });
    },
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
  background-color: var(--background-box);;
  border: 1px solid var(--background-box);;
  border-radius: 10px;
  padding: 5rem;
}

#title-login {
  font-size: 1.7rem;
}

.cadastro {
  color: var(--primary-color);
  font-weight: 400;
}
</style>
