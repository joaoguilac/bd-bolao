<template>
 <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
   <b-card :title="bolao.nome" :sub-title="bolao.campeonato.nome" :img-src="bolao.campeonato.emblema" img-left id="bolao-detail">
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
     </b-card-text>
        <b-button block
                  variant="outline-secondary"
                  class="
                    px-4
                    mb-3
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  :to="`/boloes/${bolao.idbolao}`">
          <b-icon
            v-bind:icon="button_icon" class="mr-2"></b-icon>{{button_text}}
        </b-button>

   </b-card>
  </div>
</template>

<script>
  import moment from "moment";
  import jwt_decode from "jwt-decode";

  export default {
    props: {
      bolao: Object,
    },
    created() {
      let token = localStorage.getItem("token");
      let email = jwt_decode(token).email;
      let jaEntrou = this.bolao.participantes.some(
        participante => participante.Apostador_email === email && participante.status === 1
      );

      if (jaEntrou) {
        this.button_text =  "Entrou";
        this.button_icon = "check-circle-fill";
      } else {
        let tempoIngressar = this.getTempoIngressar(this.bolao.primeira_partida);
        if (tempoIngressar == "Já iniciado"){
          this.button_text =  "Não é possível mais";
          this.button_icon = "hourglass-bottom";
        } else {
          this.button_text =  "Entrar no bolão";
          this.button_icon = 'person-plus'
        }

      }
    },
    data(){
      return {
        button_text: '',
        button_icon: '',
      }
    },
    methods: {
      getTempoIngressar(partida){
        moment.locale('pt-br');
        let data = moment(partida.data);
        if(data.isAfter(moment())){
          return data.fromNow();
        } else {
          return 'Já iniciado'
        }
      },
    }
  }
</script>

<style scoped>
.card-img-left{
  max-width: 250px;
}
.card {
  color: var(--text-color);
  border-radius: 10px;
  word-wrap: break-word;
}

.card .name p {
  margin-bottom: 0 !important;
}

.name {
  padding: 1rem;
  color: #1e1e1e;
  font-weight: 400;
}

.content-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.info {
  background-color: #ededed;
}

.info p {
  margin-bottom: 0.5rem !important;
}

.p-info,
.label-info {
  display: flex;
  align-items: center;
}

.button-entrar button {
  width: 10rem;
  margin-top: 1.2rem;
}


@media (max-width: 1360px) {
  .p-info {
    flex-direction: column;
    align-items: flex-start;
  }
  .content-card {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
}

@media (min-width: 1500px){
  .content-card {
    grid-template-columns: 200px 1fr;
  }
}
</style>
