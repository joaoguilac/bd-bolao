<template>
  <div>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <img
            src="/bolao-logo-white.svg"
            alt="Logo Bolão"
            style="width: 10rem"
          >
          <nuxt-link to="/boloes/novo">
            <li> <b-icon icon="plus-circle-fill" class="mr-2 menu-icons"></b-icon>Criar Bolão</li>
          </nuxt-link>
          <nuxt-link to="/home">
            <li> <b-icon icon="search" class="mr-2 menu-icons"></b-icon>Bolões</li>
          </nuxt-link>
           <nuxt-link to="/">
            <li> <b-icon icon="arrow-left-square-fill" class="mr-2 menu-icons"></b-icon>Sair</li>
          </nuxt-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  #menuToggle
  {
    display: block;
    position: relative;
    top: 73px;
    left: 50px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a
  {
    text-decoration: none;
    color:  white;

    transition: color 0.3s ease;
  }

  #menuToggle a:hover
  {
    color: var(--primary-color-hover);
  }


  #menuToggle input
  {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }


  #menuToggle span
  {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: white;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  .menu-icons{
    color: var(--primary-color);
  }

  #menuToggle span:first-child
  {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2)
  {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span
  {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: white;
  }

  #menuToggle input:checked ~ span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2)
  {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu
  {
    position: absolute;
    width: 310px;
    height: 100vh;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background-color: rgba(30, 30,30, 60);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  }

  #menu li
  {
    padding: 10px 0;
    font-size: 22px;
  }

  #menuToggle input:checked ~ ul
  {
    transform: none;
  }
</style>

