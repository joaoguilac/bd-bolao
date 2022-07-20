<template>
  <div>
    <Header></Header>
    <div class="box-search w-100 d-flex justify-content-center mb-5">
      <SearchInput @search="searchBoloes"></SearchInput>
    </div>
    <div class="boloes row p-4">
      <Card button_icon="person-plus" button_text="Entrar"
            :campeonato_emblema="bolao.campeonato.emblema"
            :nome="bolao.nome"
            :participantes="bolao.participacoes.length"
            :admin="bolao.administrador.nome"
            :tempo_ingressar="getTempoIngressar(bolao.primeira_partida)"
            v-for="bolao in boloes"
            :key="bolao.id"
      />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import SearchInput from '~/components/SearchInput.vue';
export default {
    name: "Usuario",
    components: { SearchInput },
    data(){
      return {
        boloes: []
      }
    },
  mounted() {
    this.getBoloes();
  },
  methods:{
    getBoloes(filtros){
      this.$axios.get('/bolao/bolao')
      .then(response => {
        this.boloes = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    getTempoIngressar(partida){
      moment.locale('pt-br');
      let partida_data = moment(partida.data);
      partida_data.add(partida.horario, 'seconds')
      return partida_data.fromNow();
    },
    searchBoloes(search){
      this.getBoloes({'search': search});
    }
  }

};
</script>

<style scoped>

.boloes {
  margin: 5rem 0 3rem 1rem;
}
</style>
