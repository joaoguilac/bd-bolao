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
          style="color: white"
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
            type="submit"
            block
            variant="success"
            class="px-4 mb-3 bold"
          >
            CADASTRAR
          </b-button>
          <b-row>
            <b-col>
              <p class="mt-3 mb-3 text-center" style="color: white">
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
    cadastrar() {
      this.$axios.post("/auth/register", {
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        telefone: this.telefone,
        senha: this.senha,
      }).then((response)=>{
        this.$router.push("/login")
        this.$bvToast.toast("Faça login para continuar!", {
          title: "Cadastro realizado com sucesso!",
          variant: "success",
          solid: true,
          toast: true,
          autoHideDelay: 5000,
        });
      }).catch(({response})=>{
        this.$bvToast.toast(response.data.message, {
          title: "Erro",
          variant: "danger",
          solid: true,
          toast: true,
          autoHideDelay: 5000,
        });
      })
    },
  },
};
</script>

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
  background-color: var(--background-box);;
  border: 1px solid var(--background-box);;
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
