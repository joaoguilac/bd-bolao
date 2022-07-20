<template>
  <div>
    <Header></Header>
    <b-container class="box-form">
      <h1 id="title" class="text-center my-5">Criar Bolão</h1>
      <form @submit.prevent="criarBolao">
        <p class="title-form">> Bolão</p>
        <input
          required
          type="text"
          v-model="nome_bolao"
          class="form-control p-3"
          placeholder="Nome do Bolão"
        />
        <br />
        <input
          required
          type="number"
          v-model="aposta_minima"
          class="form-control p-3"
          placeholder="Aposta Mínima"
        />
        <br />
        <b-select
          name="campeonato"
          id="campeonato"
          :options="campeonatosOptions"
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
            v-model="placar_exato"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Placar Exato (1x)"
          />
          <input
            id="gols_vencedor"
            v-model="gols_vencedor"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Gols do Time Vencedor (1x)"
          />
          <input
            id="gols_perdedor"
            v-model="gols_perdedor"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Gols do Time Perdedor (1x)"
          />
          <input
            id="saldo_gols"
            v-model="saldo_gols"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Saldo de Gols (1x)"
          />
          <input
            id="acerto_vencedor"
            v-model="acerto_vencedor"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Acerto do Vencedor (1x)"
          />
          <input
            id="acerto_empate"
            v-model="acerto_empate"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Acerto do Empate (1x)"
          />
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <b-button
            type="submit"
            block
            variant="success"
            class="px-4 mb-3 mt-4 w-25"
          >
            Criar
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
      placar_exato: null,
      gols_vencedor: null,
      gols_perdedor: null,
      saldo_gols: null,
      acerto_vencedor: null,
      acerto_empate: null,
      publico: true,
      campeonatosOptions: [],
    };
  },
  mounted() {
    this.getCompanies();
  },
  methods: {
    criarBolao() {},
    async getCompanies() {
      let { data: campeonatos } = await this.$axios.get("/bolao/campeonatos");
      this.campeonatosOptions = campeonatos.map((campeonato) => ({
        text: campeonato.nome,
        value: campeonato.id,
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
