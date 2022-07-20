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
        <select name="campeonato" id="campeonato" class="form-control p-3">
          <option value="0" :selected="true">Selecione o Campeonato</option>
          <option value="1">Brasileirão</option>
        </select>
        <div class="custom-control custom-switch my-3">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitches"
            v-model="publico"
            @change="mudarPrivacidade"
          />
          <label class="custom-control-label" for="customSwitches"
            >Público</label
          >
        </div>
        <p class="my-4 title-form">> Pontuação</p>
        <div class="input-box">
          <input
            id="placar_exato"
            v-model="placar_exato"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Placar Exato"
          />
          <input
            id="gols_vencedor"
            v-model="gols_vencedor"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Gols do Time Vencedor"
          />
          <input
            id="gols_perdedor"
            v-model="gols_perdedor"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Gols do Time Perdedor"
          />
          <input
            id="saldo_gols"
            v-model="saldo_gols"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Saldo de Gols"
          />
          <input
            id="acerto_vencedor"
            v-model="acerto_vencedor"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Acerto do Vencedor"
          />
          <input
            id="acerto_empate"
            v-model="acerto_empate"
            type="number"
            required
            class="form-control mb-xl-3 p-3"
            placeholder="Acerto do Empate"
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
      aposta_minima: 0,
      placar_exato: 0,
      gols_vencedor: 0,
      gols_perdedor: 0,
      saldo_gols: 0,
      acerto_vencedor: 0,
      acerto_empate: 0,
      publico: true,
    };
  },
  methods: {
    mudarPrivacidade() {
      this.publico = !this.publico;
    },
    criarBolao() {},
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
