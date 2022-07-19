<template>
  <div>
    <div class="header d-flex align-items-center">
      <div class="hamburger-menu">
        <div class="bar-top"></div>
        <div class="bar-middle"></div>
        <div class="bar-bottom"></div>
      </div>
      <div class="logo">
        <img
          src="bolao-logo-white.svg"
          alt="Logo Bolão"
          class="mt-2"
          style="width: 15rem"
        />
      </div>
    </div>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap");

:root {
  --primary-color: #13c75f;
  --text-color: #7e7e90;
  --sub-text-color: #ababc0;
  --second-color: #f2c94c;
  --danger-color: #eb5757;
  --details-color: #6a6180;
}

* {
  margin: 0;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  color: white;
  background-color: #f9f8f4;
  color: var(--text-color);
}

a:hover {
  text-decoration: none;
}
</style>

<style scoped>
.header {
  background-color: var(--primary-color);
}
.hamburger-menu {
  margin: 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
}

.bar-top,
.bar-middle,
.bar-bottom {
  height: 5px;
  background: white;
  border-radius: 5px;
  margin: 3px 0;
  transform-origin: left;
  transition: all 0.5s;
}
.hamburger-menu:hover .bar-top {
  transform: rotate(45deg);
}
.hamburger-menu:hover .bar-middle {
  transform: translateX(1rem);
  opacity: 0;
}
.hamburger-menu:hover .bar-bottom {
  transform: rotate(-45deg);
}

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
