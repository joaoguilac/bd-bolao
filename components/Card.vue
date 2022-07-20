<template>
 <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
    <div class="card">
      <div
        class="
          name
          w-100
          text-center
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <p>Bolão dos Amigos do IMD</p>
      </div>
      <div class="content-card">
        <div class="image d-flex align-items-center justify-content-center">
          <img src="/brasileirao.png" alt="Bolão aberto no smartphone">
        </div>
        <div class="info p-3">
          <p class="w-100 p-info">Brasileirão Série A [2022]</p>
          <p class="w-100 p-info">
            <span class="label-info"
              ><b-icon icon="person-fill" class="m-2"></b-icon
              ><b class="mr-2">Adm:</b></span
            >Caio Mateus
          </p>
          <p class="w-100 p-info">
            <span class="label-info"
              ><b-icon icon="people-fill" class="m-2"></b-icon
              ><b class="mr-2">Participantes:</b></span
            >
            33/77
          </p>
          <p class="w-100 p-info">
            <span class="label-info"
              ><b-icon icon="clock-fill" class="m-2"></b-icon
              ><b class="mr-2">Tempo para ingressar:</b></span
            >
            20min
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
              :to="`/usuario/bolao`"
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

              <b-icon v-bind:icon="icon" class="m-2"></b-icon>
              {{text}}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: String,
      text: String
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
