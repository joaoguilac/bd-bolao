<template>
 <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
    <div class="card">
      <div
        class="
          w-100
          text-center
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <p>{{bolao.nome}}</p>
      </div>
      <div class="content-card">
        <div class="image d-flex align-items-center justify-content-center">
          <img :src="bolao.campeonato.emblema" alt="Bolão aberto no smartphone">
        </div>
        <div class="info p-3">
          <p class="w-100 p-info">{{ bolao.campeonato.nome }}</p>
          <p class="w-100 p-info">
            <span class="label-info"
              ><b-icon icon="person-fill" class="m-2"></b-icon
              ><b class="mr-2">Adm:</b></span
            >{{bolao.administrador.nome}}
          </p>
          <p class="w-100 p-info">
            <span class="label-info"
              ><b-icon icon="people-fill" class="m-2"></b-icon
              ><b class="mr-2">Participantes:</b></span
            >
            {{ bolao.participacoes.length }}
          </p>
          <p class="w-100 p-info">
            <span class="label-info"
              ><b-icon icon="clock-fill" class="m-2"></b-icon
              ><b class="mr-2">Tempo para ingressar:</b></span
            >
            {{getTempoIngressar(bolao.primeira_partida)}}
          </p>
          <div
            class="
              button-entrar
              w-100
              d-flex
              align-items-center
              justify-content-end
            "
          >
            <b-button
              :to="`/boloes/${bolao.idbolao}`"
              type="button"
              block
              variant="outline-secondary"
              class="
                px-4
                mb-3
                d-flex
                align-items-center
                justify-content-center
              "
            >

              <b-icon v-bind:icon="button_icon" class="m-2"></b-icon>
              {{button_text}}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from "moment";

  export default {
    props: {
      bolao: Object,
      button_text: String,
      button_icon: String,
    },
    methods: {
      getTempoIngressar(partida){
        moment.locale('pt-br');
        let partida_data = moment(partida.data);
        partida_data.add(partida.horario, 'seconds')
        return partida_data.fromNow();
      },
    }
  }
</script>

<style scoped>
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
