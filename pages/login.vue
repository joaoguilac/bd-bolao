<template>
  <b-container>
    <img src="bolao-logo-white.svg" alt="">
    <h1>LOGIN</h1>
    <p>Faça o login para começar a apostar</p>
    <br>
    <form @submit.prevent="login">
      <input
        required
        type="email"
        v-model="email"
        class="form-control"
        placeholder="E-mail"
      />
      <br>
      <input
        id="password"
        required
        :type="passwordFieldType"
        v-model="senha"
        class="form-control"
        placeholder="Senha"
      />
      <b-row class="px-0">
        <b-col cols="6">
          <b-form-checkbox
            id="checkbox-1"
            class="mt-2 ml-2 text"
            v-model="mostrarSenha"
            @change="mudarVisibilidadeSenha"
          >
            Mostrar a senha
          </b-form-checkbox>
        </b-col>
        <b-col cols="6" class="text-right mb-2">
          <b-button to="/esqueciSenha" variant="link">Esqueceu sua senha?</b-button>
        </b-col>
      </b-row>
      <b-button type="submit" block variant="success" class="px-4">
        Entrar
      </b-button>
      <!-- <b-row>
        <b-col>
          <p class="mt-3 mb-3 text-center">
            Ainda não tem conta?
            <nuxt-link :to="`/register`">Cadastrar-se</nuxt-link>
          </p>
        </b-col>
      </b-row> -->
    </form>
    <br>
    <nuxt-link to="/usuario">
      <b-button>
        Entrar
      </b-button>
    </nuxt-link>
  </b-container>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      mostrarSenha: false,
      passwordFieldType: "password",
      email: "",
      senha: "",
      perfil: {},
      cookie: null,
      next: true
    };
  },
  methods: {
    // async login() {
    //   Swal.fire({
    //     title: 'Carregando...',
    //     text: 'Aguarde alguns instantes.',
    //     showCancelButton: false,
    //     showConfirmButton: false,
    //     onOpen: () => {
    //       Swal.showLoading()
    //     }
    //   })

    //   await this.$axios
    //     .post("sign-in/", {
    //       email: this.email,
    //       senha: this.senha
    //     })
    //     .then(auth => {
    //       Cookies.set("auth", auth.data);
    //     })
    //     .catch(err => {
    //       let text;
    //       let icon = "error";
    //       if (err.response.status === 403) {
    //         text = "Email ou senha não encontrados";
    //       }
    //       else if (err.response.status === 500 && err.response.data.message === "Usuário nao validado, foi reenviado o email de confirmação") {
    //         icons = "info";
    //         text = "Seu cadastro ainda não foi confirmado. Verifique seu email e tente novamente.";
    //       }
    //       else if (err.response.status === 500 && err.response.data.message === "Invalid username/password supplied") {
    //         text = "O email e/ou a senha não conferem.";
    //       }
    //       else {
    //         text = "Aconteceu algum problema com seu login, tente novamente. "
    //         + "Caso o erro persista, envie email para petcc@dimap.ufrn.br explicando o ocorrido.";
    //       }

    //       Swal.fire({
    //         icon: icon,
    //         title: "Oops...",
    //         text: text,
    //       });
    //     })

    //   if (Cookies.get("auth") !== "null") {
    //     console.log(typeof Cookies.get("auth"));
    //     await this.getProfile();
    //   }
    // }
  },
}
</script>

<style>

</style>
