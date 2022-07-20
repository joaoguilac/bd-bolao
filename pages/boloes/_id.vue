<template>
  <div>
    <div>
      <Header></Header>
      <b-container>
      <b-card :img-src="bolao.campeonato.emblema" img-left id="bolao-detail" style="position:relative;top: -5em">
        <b-card-title class="d-flex justify-content-between">
          <span>{{ bolao.nome }}</span>
          <b-icon icon="gear" v-if="verificaAdiministrador()" v-b-modal.solicitacoes></b-icon>
        </b-card-title>
        <b-card-sub-title>
          <span>{{ bolao.campeonato.nome }}</span>
        </b-card-sub-title>
        <b-card-text>
          <div>
            <b><b-icon icon="person-square" class="mr-2"></b-icon>Administrador: </b>
            {{ bolao.administrador.nome }} ({{bolao.administrador.email}})
          </div>
          <div>
            <b><b-icon icon="people-fill" class="mr-2"></b-icon>{{ bolao.participantes.length }}</b> participantes
          </div>
          <div>
            <b><b-icon icon="clock-fill" class="mr-2"></b-icon>Tempo até inicio:</b>
            {{getTempoIngressar(bolao.primeira_partida)}}
          </div>
          <div v-b-modal.regras style="cursor:pointer;">
            <b-icon icon="pen-fill" class="mr-2"></b-icon>
            Regras de Pontuação
          </div>
        </b-card-text>
        <b-card-text>
          <b-button v-if="!jaParticipa() && !verificaAdiministrador" v-b-modal.modal>Participar</b-button>
        </b-card-text>
        <b-modal id="modal" cancel-title="Cancelar" ok-title="Participar"  @ok="participar" title="Deseja confirmar?">
          Deseja participar com {{bolao.aposta_minima}} pontos?
        </b-modal>
        <b-modal title="Regras de Pontuação" id="regras">
          <b-list-group>
            <b-list-group-item>Placar Exato: <span class="bold">{{bolao.placar_certo}}x</span></b-list-group-item>
            <b-list-group-item>Gols do Time Vencedor: <span class="bold">{{bolao.gols_time_vencedor}}x</span></b-list-group-item>
            <b-list-group-item>Gols do Time Perdedor: <span class="bold">{{bolao.gols_time_perdedor}}x</span></b-list-group-item>
            <b-list-group-item>Saldo de Gols: <span class="bold">{{bolao.saldo_gols}}x</span></b-list-group-item>
            <b-list-group-item>Acerto do Vencedor: <span class="bold">{{bolao.acerto_vencedor}}x</span></b-list-group-item>
            <b-list-group-item>Acerto do Empate: <span class="bold">{{bolao.acerto_empate}}x</span></b-list-group-item>
          </b-list-group>
        </b-modal>
        <b-modal title="Solicitações" id="solicitacoes" :ok-only="true">
          <b-list-group>
            <b-list-group-item v-for="sol in bolao.participantes.filter((p)=>p.status===0)" class="d-flex justify-content-between">
              <div>{{sol.Apostador_email}}</div>
              <div>
                <b-icon icon="check-square" class="h4" variant="success" style="cursor:pointer;" @click="()=>(responderSolicitacao(1, sol.Apostador_email))"></b-icon>
                <b-icon icon="x-square" class="h4" variant="danger" style="cursor:pointer;" @click="()=>(responderSolicitacao(3, sol.Apostador_email))"></b-icon>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-modal>
      </b-card>
      </b-container>
    </div>
    <div>
      <b-container class="mt-5">
        <b-card class="mt-5" no-body v-if="palpitesCarregados">
          <b-tabs card>
            <b-tab title="Abertas" active>
              <div class="d-flex justify-content-between my-5" v-for="partida in abertas" :key-="partida.id" v-if="">
                <div style="width: 80%" class="d-flex">
                  <span style="width: 20px">{{partida.num_gols_casa}}</span>
                  <img :src="partida.time_casa.escudo"  style="min-width: 5%; max-width: 5%" alt="" class="mx-4"/>
                  <b-input style="width: 8%" type="number" @blur="()=>{salvaPalpite(partida.idpartida)}" v-model="palpites[partida.idpartida].casa"></b-input>
                  <span class="mx-4">vs</span>
                  <b-input style="width: 8%" type="number" @blur="()=>{salvaPalpite(partida.idpartida)}" v-model="palpites[partida.idpartida].fora"></b-input>
                  <img :src="partida.time_fora.escudo"  style="min-width: 5%; max-width: 5%" alt="" class="mx-4"/>
                  <span>{{partida.num_gols_fora}}</span>
                </div>
                <div style="width: 20%" class="d-flex flex-column align-items-center">
                  <span>{{getFormatedDate(partida.data)}}</span>
                </div>
              </div>
            </b-tab>
            <b-tab title="Finalizadas">
              <div class="d-flex justify-content-between my-5" v-for="partida in fechadas" :key-="partida.id" v-if="">
                <div style="width: 80%" class="d-flex align-items-center align-content-center">
                  <h3 style="width: 20px">{{partida.num_gols_casa}}</h3>
                  <img :src="partida.time_casa.escudo"  style="min-width: 5%; max-width: 5%" alt="" class="mx-4"/>
                  <span class="mx-4">vs</span>
                  <img :src="partida.time_fora.escudo"  style="min-width: 5%; max-width: 5%" alt="" class="mx-4"/>
                  <h3>{{partida.num_gols_fora}}</h3>
                </div>
                <div style="width: 20%" class="d-flex flex-column align-items-center">
                  <span>{{getFormatedDate(partida.data)}}</span>
                  <div>Partida já iniciada!!</div>
                </div>
              </div>
            </b-tab>
          </b-tabs>

        </b-card>
      </b-container>
    </div>
  </div>
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
        participantes: [],
        primeira_partida: {},
      },
      partidas: [],
      palpites: {},
      valorApostado: null,
      palpitesCarregados: false,
    }
  },
  computed: {
    abertas(){
      return this.partidas.filter((p)=>{
        return moment(p.data).isAfter(moment());
      });
    },
    fechadas(){
      return this.partidas.filter((p)=>{
        return moment(p.data).isBefore(moment());
      });
    },
  },
  created() {
    this.getBolao();
  },
  methods: {
    getFormatedDate(date){
      return moment(date).format("DD/MM/YYYY HH:mm");
    },
    getTempoIngressar(partida){
      moment.locale('pt-br');
      let data = moment(partida.data);
      if(data.isAfter(moment())){
        return data.fromNow();
      } else {
        return 'Já iniciado'
      }
    },
    salvaPalpite(idpartida){
      if (process.browser && this.palpites[idpartida].casa && this.palpites[idpartida].fora){

        this.$axios.post(`/campeonatos/${this.bolao.campeonato_id}/partidas/${idpartida}/palpites/`, {
          gols_time_casa: this.palpites[idpartida].casa,
          gols_time_visitante: this.palpites[idpartida].fora,
        })
          .then(response => {
            this.getBolao();
          })
      }
    },
    verificaAdiministrador(){
      if(process.browser) {
        let token = localStorage.getItem('token');
        if (token) {
          let decoded = jwt_decode(token);
          if (decoded.email === this.bolao.administrador.email) {
            return true;
          }
        }
      }
      return false;
    },
    responderSolicitacao(novo_status, email){
      this.$axios.post(`/bolao/${this.bolao.idbolao}/responder`, {
        'status': novo_status,
        'Apostador_email': email,
      })
        .then(response => {
          this.$bvToast.toast(response.data.message, {
            title: 'Sucesso',
            variant: 'success',
            solid: true,
            appendToast: true,
            autoHideDelay: 5000
          });
          this.getBolao();
        })
    },

    getBolao(id){
      this.$axios.get(`/bolao/${this.$route.params.id}`)
        .then(response => {
          this.bolao = response.data.data
          this.getPartidas(response.data.data.campeonato_id);
        })
    },
    getPartidas(campeonato_id){
      this.$axios.get(`/campeonatos/${campeonato_id}/partidas`)
        .then(response => {
          this.partidas = response.data.data;
          this.getPalpites()
        })
    },
    getPalpites(){
      if(process.browser){
        let token = localStorage.getItem('token');
        let email = jwt_decode(token).email;
        this.$axios.get(`/campeonatos/${this.bolao.campeonato.idcampeonato}/partidas/palpites?apostador_email=${email}`).then((response)=>{
          this.palpites = response.data.data;
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
        let userEmail = jwt_decode(localStorage.getItem('token')).email;
        return this.bolao.participantes.some(participacao => participacao.Apostador_email === userEmail && participacao.status === 1);
      }
    },
    participar(){
      if (process.browser){
        this.$axios.post(`/bolao/bolao/${this.$route.params.id}/participar`, {
          valor: this.bolao.aposta_minima,
          token: localStorage.getItem('token')
        })          .then(response => {
            this.getBolao();
          })
      }

    }
  }
}
</script>

<style>
  #bolao-detail img{
    max-height: 250px;
  }
  .card-img-left{
    margin: 20px
  }
</style>
