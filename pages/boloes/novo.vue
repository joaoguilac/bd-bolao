<template>
  <div>
    <Header></Header>
    <b-container class="box-form">
      <h1 id="title" class="text-center my-5">Criar Bolão</h1>
      <form @submit.prevent="criarBolao">
        <p class="title-form">{{campeonato}}Bolão</p>
        <input
          required
          type="text"
          v-model="nome_bolao"
          class="form-control p-3"
          placeholder="Nome do Bolão *"
        />
        <br />
        <b-input
          required
          type="number"
          v-model="aposta_minima"
          class="form-control p-3"
          placeholder="Aposta Mínima *"
        />
        <br />
        <b-select
          name="campeonato"
          id="campeonato"
          :options="campeonatosOptions"
          v-model="campeonato"
        >
        </b-select>
        <div class="custom-control custom-switch my-3">
          <b-form-checkbox v-model="publico" name="check-button" switch>
            {{ publico ? 'Público' : 'Privado' }}
          </b-form-checkbox>
        </div>
        <p class="my-4 title-form">> Pontuação</p>
        <div class="input-box">
          <input
            id="placar_exato"
            v-model="placar_certo"
            type="number"
            class="form-control mb-xl-3 p-3"
            placeholder="Placar Exato (1x)"
          />
          <input
            id="gols_vencedor"
            v-model="gols_vencedor"
            type="number"
            class="form-control mb-xl-3 p-3"
            placeholder="Gols do Time Vencedor (1x)"
          />
          <input
            id="gols_perdedor"
            v-model="gols_perdedor"
            type="number"
            class="form-control mb-xl-3 p-3"
            placeholder="Gols do Time Perdedor (1x)"
          />
          <input
            id="saldo_gols"
            v-model="saldo_gols"
            type="number"
            class="form-control mb-xl-3 p-3"
            placeholder="Saldo de Gols (1x)"
          />
          <input
            id="acerto_vencedor"
            v-model="acerto_vencedor"
            type="number"
            class="form-control mb-xl-3 p-3"
            placeholder="Acerto do Vencedor (1x)"
          />
          <input
            id="acerto_empate"
            v-model="acerto_empate"
            type="number"
            class="form-control mb-xl-3 p-3"
            placeholder="Acerto do Empate (1x)"
          />
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <b-button
            type="submit"
            block
            variant="success"
            class="px-4 mb-3 mt-4 w-25 bold"
          >
            CRIAR
          </b-button>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CriarBolao",
  data() {
    return {
      nome_bolao: "",
      aposta_minima: null,
      placar_certo: null,
      gols_vencedor: null,
      gols_perdedor: null,
      saldo_gols: null,
      acerto_vencedor: null,
      acerto_empate: null,
      publico: true,
      campeonato: null,
      campeonatosOptions: [{ value: null, text: 'Selecione um campeonato' },],
    };
  },
  mounted() {
    this.getCompanies();
  },
  methods: {
    criarBolao() {
      let payload = {
        "nome": this.nome_bolao,
        "privacidade": this.publico ? "publico" : "privado",
        "status": 0,
        "aposta_minima": this.aposta_minima ,
        "campeonato_id": this.campeonato,
        "adminstrador_token": localStorage.getItem('token'),
        "placar_certo": this.placar_certo | 1,
        "gols_time_vencedor": this.gols_vencedor | 1,
        "gols_time_perdedor": this.gols_perdedor | 1,
        "saldo_gols": this.saldo_gols | 1,
        "acerto_vencedor": this.acerto_vencedor | 1,
        "acerto_empate": this.acerto_empate | 1
      }
      this.$axios.post("/bolao/bolao", payload, )
        .then((response)=>{
          this.$router.push("/boloes/meus-boloes")
          this.$bvToast.toast("Bolão criado com sucesso!", {
            title: "Sucesso",
            variant: "success",
            solid: true,
            toast: true,
            appendToast: true,
            autoHideDelay: 5000,
          });
      }).catch(({response})=> {
        console.log(response)
      });
    },
    async getCompanies() {
      let { data: campeonatos } = await this.$axios.get("/bolao/campeonatos");
      console.log(campeonatos)

      this.campeonatosOptions.push(...campeonatos.map(campeonato => {
        return {
          value: campeonato.idcampeonato,
          text: campeonato.nome
        }
      }));
    },
  },
};
</script>

<style scoped>
#title {
  color: #6a6180;
  font-size: 1.9rem;
}

.box-form {
  color: var(--text-color);
}
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
}

.title-form {
  font-weight: 300;
  font-size: 1.3rem;
}

.input-box {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
}
</style>
