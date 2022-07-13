<template>
  <b-container>
    <img src="bolao-logo.svg" alt="">
    <h1>Para você que gosta de futebol e de apostas</h1>
    <p>Faça o seu cadastro e chame seus amigos</p>
    <br>
    <nuxt-link to="/login">
      <b-button>Login</b-button>
    </nuxt-link>
    <br><br>
    <form @submit.prevent="login">
      <input
        required
        type="email"
        v-model="email"
        class="form-control"
        placeholder="E-mail"
      />
      <b-button type="submit" block variant="success" class="px-4">
        Cadastrar
      </b-button>
    </form>
    <br><br>
    <img src="smartphone-index.svg" alt="">
    <h1>Se você quer se divertir apostando em jogos de futebol, bolão é pra você!</h1>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>

</style>
