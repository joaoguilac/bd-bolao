<template>
  <div>
    <Header></Header>
    <div class="box-search w-100 d-flex justify-content-center mb-5">
      <SearchInput @search="searchBoloes"></SearchInput>
    </div>
    <div class="boloes row p-4">
      <Card :bolao="bolao" v-for="bolao in boloes" :key="bolao.id" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import SearchInput from '~/components/SearchInput.vue';
export default {
    name: "Home",
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
      this.$axios.get('/bolao', {params: filtros})
      .then(response => {
        this.boloes = response.data.data;
      })
      .catch(({response}) => {
        let {message} = response.data;
        if(message){
          this.$root.$bvToast.toast(message, {
            title: "Erro",
            variant: "danger",
            solid: true,
            toast: true,
            autoHideDelay: 5000,
            appendToast: true,
          });
        }
      });
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
