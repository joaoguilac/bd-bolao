
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
        <h1 class="mb-3">Para você que gosta de futebol e de apostas</h1>
        <p>Faça o seu cadastro e chame seus amigos</p>
      </div>
      <form @submit.prevent="login" style="width: 100%;" class="w-100 d-flex align-content-center justify-content-between">
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
      <img src="smartphone-index.svg" alt="" />
    </b-container>
    <div class="login-box back-green w-100">
      <h2>
        Se você quer se divertir apostando em jogos de futebol, bolão é pra você!
      </h2>
      <p>Faça o seu login</p>
      <nuxt-link to="/login" class="w-25">
        <b-button type="submit" block variant="success">Login</b-button>
      </nuxt-link>
    </div>
    <div class="footer back-green w-100">
      <p class="ml-4">Ana Carolina | Cácio Lucas | João Guilherme </p>
      <p>© 2022 - Todos os direitos reservados</p>
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
.footer{
  display: grid;
  grid-template-columns: 1fr 20rem 1fr;
  margin: 0 auto;
  padding: 1rem;
}
</style>
