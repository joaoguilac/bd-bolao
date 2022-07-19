<template>
<div>
  <div class="header d-flex align-items-center">
    <div class="hamburger-menu">
      <div class="bar-top"></div>
      <div class="bar-middle"></div>
      <div class="bar-bottom"></div>
    </div>
    <div class="logo">
       <img src="../../../static/bolao-logo-white.svg" alt="Logo Bolão" class="mt-2" style="width:15rem;">
    </div>
  </div>
   <b-container class="box-form">
    <h1 id="title" class="text-center my-5">Criar Bolão</h1>
     <form @submit.prevent="login">
          <p class="title-form">> Bolão</p>
          <input
            required
            type="text"
            v-model="nome"
            class="form-control"
            placeholder="Nome do Bolão"
          />
          <br>
          <input
            id="text"
            required
            v-model="telefone"
            class="form-control mb-xl-3"
            placeholder="Telefone"
          />
          <div class="custom-control custom-switch my-3">
            <input type="checkbox" class="custom-control-input" id="customSwitches">
            <label class="custom-control-label" for="customSwitches">Público</label>
          </div>
           <p class="my-4 title-form">> Pontuação</p>
            <input
            id="text"
            required
            v-model="pontos"
            class="form-control mb-xl-3"
            placeholder="Pontos"
          />
          <div class="d-flex align-items-center justify-content-end">
            <b-button type="submit" block variant="success" class="px-4 mb-3 mt-4 w-25">
              Criar
            </b-button>
          </div>
        </form>
  </b-container>
</div>
</template>

<script>
export default {
  name: "Criar",
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');

  :root {
    --primary-color: #13c75f;
    --text-color: #7e7e90;
    --sub-text-color: #ababc0;
    --second-color: #f2c94c;
    --danger-color: #EB5757;
    --details-color: #6a6180;
  }

  * {
    margin: 0;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    padding: 0;
    box-sizing: border-box;
  }

  html,body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    color: white;
    background-color: #F9F8F4;
  }

  a:hover{
    text-decoration: none;
  }

</style>

<style scoped>
  .header{
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
    transform:translateX(1rem);
    opacity: 0;
  }
  .hamburger-menu:hover .bar-bottom {
    transform: rotate(-45deg);
  }

  #title{
    color: #6A6180;
    font-size: 1.9rem;
  }

  .box-form{
    color: var(--text-color);
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
  }

  .title-form{
    font-weight: 300;
    font-size: 1.3rem;
  }

</style>

