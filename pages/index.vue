<template>
  <b-container>
    <img src="bolao-logo.svg" alt="">
    <h1>Para você que gosta de futebol e de apostas</h1>
    <p>Faça o seu cadastro e chame seus amigos</p>
    <br>
    <nuxt-link to="/login">
      <b-button>Login</b-button>
    </nuxt-link>
    <nuxt-link to="/register">
      <b-button>Cadastrar</b-button>
    </nuxt-link>
    <br><br>
    <img src="smartphone-index.svg" alt="">
    <h1>Se você quer se divertir apostando em jogos de futebol, bolão é pra você!</h1>
    <b-button>Entre com sua conta do Facebook</b-button>
    <b-button>Entre com sua conta do Gmail</b-button>
    <b-button>Entre com sua conta do Twitter</b-button>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>

</style>
