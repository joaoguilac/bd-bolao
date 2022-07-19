
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
      <div class="w-100 d-flex align-items-center justify-content-center mt-5 mb-3">
        <img src="bolao-logo.svg" alt="Logo do Bolão" style="width:20rem;" />
      </div>
      <div class="info w-100 d-flex align-items-center justify-content-center flex-column my-5">
        <h1 class="mb-3 text-center">Para você que gosta de futebol e de apostas</h1>
        <p class="text-center">Faça o seu cadastro e chame seus amigos</p>
      </div>
      <form @submit.prevent="login" style="width: 100%;" class="form w-100 d-flex align-content-center justify-content-between mb-5">
        <input
          required
          type="email"
          v-model="email"
          class="form-control mr-3"
          placeholder="E-mail"
        />
        <input
          required
          type="password"
          v-model="senha"
          class="form-control mr-3"
          placeholder="Senha"
        />
        <b-button type="submit" block variant="success" class="px-4 w-25">
          Cadastrar
        </b-button>
      </form>
      <div class="w-100 d-flex justify-content-center mt-5" style="z-index: 1;">
        <img src="mockup.png" alt="Bolão aberto no smartphone" />
      </div>
    </b-container>
    <div class="w-100" style="z-index: 2;position: absolute;top: 60rem;">
      <div class="login-box back-green w-100">
        <h2 class="text-center">
          Se você quer se divertir apostando em jogos de futebol, bolão é pra você!
        </h2>
        <p>Faça o seu login</p>
        <nuxt-link to="/login" class="button-login">

          <b-button type="submit" block variant="success" class="w-100 p-3 d-flex"><div><b-icon icon="arrow-right-square" class="ml-3"></b-icon><span class="vl ml-5"></span></div><div class="w-100 d-flex align-items-center justify-content-center">Login</div></b-button>
        </nuxt-link>
      </div>
      <div class="footer back-green w-100">
        <p class="ml-4">Ana Carolina | Cácio Lucas | João Guilherme </p>
        <p class="ml-4">© 2022 - Todos os direitos reservados</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
};
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

.info{
  color: var(--text-color);
}

.info h1{
  font-weight: 300;
}

.login-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem;
}

.login-box p{
  font-size: 1.3rem;
}

.back-green {
  background-color: var(--primary-color);
}
/*
.button-login{
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 2rem;
} */

.button-login{
  width: 20rem;
}
.vl {
  border-left: 1px solid #7E7E90;
  height: 45px;
}
.footer{
  display: grid;
  grid-template-columns: 1fr 25rem 1fr;
  margin: 0 auto;
  padding: 1rem;
}

@media(max-width:700px){
  .form{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form input{
    margin-bottom: 1.5rem;
  }

}

@media(max-width:1160px){
  .footer{
    text-align: center;
    grid-template-columns: 1fr;
  }

}
</style>
