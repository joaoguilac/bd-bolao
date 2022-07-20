<template>
  <b-container>
    <img src="/brasileirao.png" alt="logo">
    <h1>Bolão dos Amigos do IMD</h1>
    <p>Campeonato: {{ campeonato }}</p>
    <p>ADM: {{ email_adm }}</p>
    <b-button>Convidar</b-button>
    <h3>Pontuação:</h3>
    <ul>
      <li>{{placar_exato}} - Placar Exato</li>
      <li>{{gols_vencedor}} - Gols do Time Vencedor</li>
      <li>{{gols_perdedor}} - Gols do Time Perdedor</li>
      <li>{{saldo_gols}} - Saldo de Gols</li>
      <li>{{acerto_vencedor}} - Acerto do Vencedor</li>
      <li>{{acerto_empate}} - Acerto do Empate</li>
    </ul>
    <b-container class="flex">
      <b-button>Geral</b-button>
      <b-button>Palpites</b-button>
      <b-button>Histórico</b-button>
      <b-button>Ranking</b-button>
      <b-button>Classificação</b-button>
      <b-button>Admin.</b-button>
      <b-button>Config.</b-button>
    </b-container>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      campeonato: "brasileirão",
      email_adm: "email@hotmail.com",
      placar_exato: 9,
      gols_vencedor: 6,
      gols_perdedor: 6,
      saldo_gols: 5,
      acerto_vencedor: 4,
      acerto_empate: 3,
    }
  },
}
</script>

<style scoped>
* {
  background-color: green;
}
</style>
