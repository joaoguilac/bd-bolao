<template>
    <div class="header">
      <Menu></Menu>
      <div class="logo mt-4">
        <nuxt-link to="/home">
          <img
            src="/bolao-logo-white.svg"
            alt="Logo Bolão"
            style="width: 15rem"
          >
        </nuxt-link>
      </div>
    </div>
</template>

<style scoped>
  .header {
    background-color: var(--primary-color);
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  .logo{
    cursor:pointer;
  }
</style>
