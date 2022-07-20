<template>
  <b-container>
    <div class="d-flex">
      <img :src="bolao.campeonato.emblema" alt="logo" style="max-height: 100px" class="mr-5">
      <div><h1>{{ bolao.nome }}</h1>
        <p>Campeonato: {{ bolao.campeonato.nome }}</p>
        <p>Administrador: {{ bolao.administrador.nome }} ({{bolao.administrador.email}})<b-button class="ml-4">Convidar</b-button></p>
        <p>{{bolao.participacoes.length}} participantes<b-button class="ml-4" v-if="!jaParticipa()" v-b-modal.modal>Participar</b-button></p>
      </div>
    </div>

    <b-modal id="modal" cancel-title="Cancelar" ok-title="Participar"  @ok="participar">
      <h2> Deseja participar com {{bolao.aposta_minima}} pontos?</h2>
    </b-modal>

    <h3>Pontuação:</h3>
    <ul>
      <li>{{bolao.placar_certo}} - Placar Exato</li>
      <li>{{bolao.gols_time_vencedor}} - Gols do Time Vencedor</li>
      <li>{{bolao.gols_time_perdedor}} - Gols do Time Perdedor</li>
      <li>{{bolao.saldo_gols}} - Saldo de Gols</li>
      <li>{{bolao.acerto_vencedor}} - Acerto do Vencedor</li>
      <li>{{bolao.acerto_empate}} - Acerto do Empate</li>
    </ul>
    <div class="d-flex justify-content-between my-5" v-for="partida in partidas" :key-="partida.id" v-if="jaParticipa()">
      <div style="width: 80%" class="d-flex">
        <span style="width: 20px">{{partida.num_gols_casa}}</span>
        <img :src="partida.time_casa.escudo"  style="min-width: 5%; max-width: 5%" alt="" class="mx-4"/>
        <b-input style="max-width: 15%;" :placeholder="partida.time_casa.nome" :readonly="partidaIniciada(partida)" @input="()=>{salvaPalpite(partida.idpartida)}" v-model="palpites[partida.idpartida].casa" v-if="palpitesCarregados"/>
        <span class="mx-4">vs</span>
        <b-input style="max-width: 15%;" :placeholder="partida.time_fora.nome" :readonly="partidaIniciada(partida)" @input="()=>{salvaPalpite(partida.idpartida)}" v-model="palpites[partida.idpartida].fora" v-if="palpitesCarregados"/>
        <img :src="partida.time_fora.escudo"  style="min-width: 5%; max-width: 5%" alt="" class="mx-4"/>
        <span>{{partida.num_gols_fora}}</span>
      </div>
      <div style="width: 20%" class="d-flex flex-column align-items-center">
        <span>{{getdata(partida.data)}} - {{getHorario(partida.horario)}}</span>
        <div v-if="partidaIniciada(partida)">Partida já iniciada!!</div>
      </div>
    </div>
  </b-container>
</template>

<script>
import moment from "moment";
import jwt_decode from "jwt-decode";

export default {

  data(){
    return {
      bolao: {
        administrador: {},
        campeonato: {},
        participacoes: []
      },
      partidas: [],
      palpites: {},
      valorApostado: null,
      palpitesCarregados: false,
    }
  },
  created() {
    this.getBolao();


  },
  methods: {
    salvaPalpite(idpartida){
      if (process.browser && this.palpites[idpartida].casa && this.palpites[idpartida].fora){
        this.$axios.post(`/bolao/bolao/${this.$route.params.id}/partidas/${idpartida}/palpitar`, {
          gols_casa: this.palpites[idpartida].casa,
          gols_fora: this.palpites[idpartida].fora,
          token: localStorage.getItem('token')
        })
          .then(response => {
            this.getBolao();
          })
      }
    },
    getBolao(id){
      this.$axios.get(`/bolao/bolao/${this.$route.params.id}`)
        .then(response => {
          this.bolao = response.data
          this.getPartidas(response.data.campeonato_id);
        })
    },
    getPartidas(campeonato_id){
      this.$axios.get(`/bolao/campeonatos/${campeonato_id}/partidas`)
        .then(response => {
          this.partidas = response.data
          this.getPalpites()
        })
    },
    getPalpites(){
      if(process.browser){
        this.$axios.post('/bolao/campeonatos/palpites', {'token': localStorage.getItem('token')}).then((response)=>{
          this.palpites = response.data
          this.palpitesCarregados = true;
        })
      }

    },
    getdata(data){
      return moment(data).format("DD/MM/YYYY")
    },
    getHorario(seconds){
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds - (hours * 3600)) / 60);
      seconds = seconds - (hours * 3600) - (minutes * 60);

      hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;

    },
    partidaIniciada(partida){
      let data = moment(partida.data);
      data.add(partida.horario, 'seconds');
      return moment().isAfter(data);
    },
    jaParticipa(){
      if (process.browser){
        let userEmail = jwt_decode(localStorage.getItem('token')).user_email;
        return this.bolao.participacoes.some(participacao => participacao.Apostador_email === userEmail);
      }
    },
    participar(){
      if (process.browser){
        this.$axios.post(`/bolao/bolao/${this.$route.params.id}/participar`, {
          valor: this.bolao.aposta_minima,
          token: localStorage.getItem('token')
        })
          .then(response => {
            this.getBolao();
          })
      }

    }
  }
}
</script>

<style scoped>
*:not(.modal-content *) {
  background-color: green;
}
::placeholder{
  color: white;
}
*[readonly="readonly"]::placeholder{
  color: black;
}
.modal-content *::placeholder{
  color: black;
}
.modal-content *{
  color:black !important;
}
input{
  color: white;
}
</style>
