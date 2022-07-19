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
      <div class="login-box d-flex flex-column align-items-center justify-content-center">
        <img src="bolao-logo-white.svg" alt="Logo Bolão" style="width: 18rem;">
        <div class="w-100 d-flex flex-column justify-content-lg-start align-content-center mb-4">
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
          <br>
          <input
            id="password"
            required
            :type="passwordFieldType"
            v-model="senha"
            class="form-control mb-xl-3"
            placeholder="Senha"
          />
          <!--
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
          -->
          <b-button type="submit" block variant="success" class="px-4 mb-3">
            Entrar
          </b-button>
          <b-row>
            <b-col>
              <p class="mt-3 mb-3 text-center">
                Ainda não tem conta?
                <nuxt-link :to="`/register`" class="cadastro">Cadastrar-se</nuxt-link>
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

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');

  :root {
    --primary-color: #13c75f;
    --text-color: #7e7e90;
    --sub-text-color: #ababc0;
    --second-color: #f2c94c;
    --danger-color: #EB5757;
    --details-color: #6a6180;
  }

  * {
    margin: 0;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    padding: 0;
    box-sizing: border-box;
  }

  html,body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    color: white;
    background-color: #F9F8F4;
  }

  a:hover{
    text-decoration: none;
  }

</style>


<style scoped>

.border > span {
  width:30%;
  height: 8px;
  display: block;
}
.border span:nth-child(1n), span:nth-child(4n){
  background-color: var(--second-color);
}
.border span:nth-child(2n), span:nth-child(5n) {
  background-color: var(--primary-color);
}
.border span:nth-child(3n), span:nth-child(6n) {
  background-color: var(--danger-color);
}

.container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box{
  background-color: #D8D8D8;
  border: 1px solid #D8D8D8;
  border-radius: 10px;
  padding: 5rem;
}

#title-login{
  font-size:1.7rem;
}

.cadastro{
  color:var(--primary-color);
  font-weight: 400;
}
</style>
