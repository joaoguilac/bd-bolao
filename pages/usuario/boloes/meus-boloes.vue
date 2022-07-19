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
    <div class="box-search w-100 d-flex justify-content-center mb-5">
      <div class="position-relative w-50">
        <input
          required
          id="searchInput"
          type="text"
          v-model="search"
          class="form-control input-search"
          placeholder="Digite o nome do bolão ou campeonato que deseja participar"
        />
        <label for="searchInput" class="ml-4 mt-2">Filtrar</label>
        <div class="btn-search h-100 mr-4"><b-icon icon="funnel-fill" class="ml-3 icon-search"></b-icon></div>
      </div>
    </div>

    <div class="boloes row p-4">
      <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
        <div class="card">
          <div class="name w-100 text-center d-flex align-items-center justify-content-center"><p>Bolão dos Amigos do IMD</p></div>
          <div class="content-card">
            <div class="image d-flex align-items-center justify-content-center"><img src="../../../static/brasileirao.png" alt="Bolão aberto no smartphone" /></div>
            <div class="info p-3 text-justify">
              <p class="w-100 p-info">Brasileirão Série A [2022]</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="person-fill" class="m-2"></b-icon><b class="mr-2">Adm:</b></span>Caio Mateus</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="people-fill" class="m-2"></b-icon><b class="mr-2">Participantes:</b></span> 77/33</p>
               <p class="w-100 p-info"><span class="label-info"><b-icon icon="clock-fill" class="m-2"></b-icon><b class="mr-2">Tempo para ingressar:</b></span> 20min</p>
              <div class="button-entrar w-100 d-flex align-items-center justify-content-end">
                <b-button type="button" block variant="outline-secondary" class="px-4 mb-3 d-flex align-items-center justify-content-center">
                  <b-icon icon="person-plus" class="m-2"></b-icon>
                  Entrar
                </b-button>
            </div>
            </div>
          </div>
        </div>
      </div>
         <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
        <div class="card">
          <div class="name w-100 text-center"><p>Bolão dos Amigos do IMD</p></div>
          <div class="content-card">
            <div class="image d-flex align-items-center justify-content-center"><img src="../../../static/brasileirao.png" alt="Bolão aberto no smartphone" /></div>
            <div class="info p-3 text-justify">
              <p class="w-100 p-info">Brasileirão Série A [2022]</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="person-fill" class="m-2"></b-icon><b class="mr-2">Adm:</b></span>Caio Mateus</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="people-fill" class="m-2"></b-icon><b class="mr-2">Participantes:</b></span> 77/33</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="clock-fill" class="m-2"></b-icon><b class="mr-2">Tempo para ingressar:</b></span> 20min</p>
              <div class="button-entrar w-100 d-flex align-items-center justify-content-end">
                <b-button type="button" block variant="outline-secondary" class="px-4 mb-3 d-flex align-items-center justify-content-center">
                  <b-icon icon="person-plus" class="m-2"></b-icon>
                  Entrar
                </b-button>
            </div>
            </div>
          </div>
        </div>
      </div>
         <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
        <div class="card">
          <div class="name w-100 text-center"><p>Bolão dos Amigos do IMD</p></div>
          <div class="content-card">
            <div class="image d-flex align-items-center justify-content-center"><img src="../../../static/brasileirao.png" alt="Bolão aberto no smartphone" /></div>
            <div class="info p-3 text-justify">
              <p class="w-100 p-info">Brasileirão Série A [2022]</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="person-fill" class="m-2"></b-icon><b class="mr-2">Adm:</b></span>Caio Mateus</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="people-fill" class="m-2"></b-icon><b class="mr-2">Participantes:</b></span> 77/33</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="clock-fill" class="m-2"></b-icon><b class="mr-2">Tempo para ingressar:</b></span> 20min</p>
              <div class="button-entrar w-100 d-flex align-items-center justify-content-end">
                <b-button type="button" block variant="outline-secondary" class="px-4 mb-3 d-flex align-items-center justify-content-center">
                  <b-icon icon="person-plus" class="m-2"></b-icon>
                  Entrar
                </b-button>
            </div>
            </div>
          </div>
        </div>
      </div>
         <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
        <div class="card">
          <div class="name w-100 text-center"><p>Bolão dos Amigos do IMD</p></div>
          <div class="content-card">
            <div class="image d-flex align-items-center justify-content-center"><img src="../../../static/brasileirao.png" alt="Bolão aberto no smartphone" /></div>
            <div class="info p-3 text-justify">
              <p class="w-100 p-info">Brasileirão Série A [2022]</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="person-fill" class="m-2"></b-icon><b class="mr-2">Adm:</b></span>Caio Mateus</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="people-fill" class="m-2"></b-icon><b class="mr-2">Participantes:</b></span> 77/33</p>
              <p class="w-100 p-info"><span class="label-info"><b-icon icon="clock-fill" class="m-2"></b-icon><b class="mr-2">Tempo para ingressar:</b></span> 20min</p>
              <div class="button-entrar w-100 d-flex align-items-center justify-content-end">
                <b-button type="button" block variant="outline-secondary" class="px-4 mb-3 d-flex align-items-center justify-content-center">
                  <b-icon icon="person-plus" class="m-2"></b-icon>
                  Entrar
                </b-button>
            </div>
            </div>
          </div>
        </div>
      class="label-info" </div>
    </div>
</div>

</template>

<script>
export default {
  name: "Boloes",
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

  .input-search{
    border: 1px solid var(--primary-color);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 2.5rem;
  }

  label{
    position: absolute;
    color: var(--text-color);
    font-size: .8rem;
    font-weight: 600;
    top: 0;
    left:0;
  }

  .box-search{
    position: absolute;
    top: 7rem;
  }

  .btn-search{
    position: absolute;
    top: 35%;
    right: 0;

  }

  .icon-search {
    color:var(--primary-color);
    font-size: 2rem;
    cursor:pointer;
  }

   .icon-search:hover {
    color:#16a251;
  }

  .card{
    color: var(--text-color);
    border-radius: 10px;
    word-wrap: break-word;
  }

  .card .name p{
    margin-bottom: 0!important;
  }

  .name{
    padding: 1rem;
    color: #1E1E1E;
    font-weight: 400;
  }

  .content-card{
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  .info{
    background-color: #EDEDED;
  }

  .info p{
    margin-bottom: .5rem!important;
  }

  .p-info, .label-info{
    display: flex;
    align-items: center;
  }

  .boloes{
    margin: 5rem 0 3rem 1rem;
  }

  .button-entrar button{
    width: 10rem;
    margin-top: 1.2rem;
  }

  @media(max-width: 1360px){
  .p-info{
    flex-direction: column;
    align-items: flex-start;
  }
  .content-card{
    display: grid;
    grid-template-columns: 150px 1fr;
  }
}
</style>
