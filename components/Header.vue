<template>
    <div class="header d-flex align-items-center">
      <Menu></Menu>
      <div class="logo">
        <nuxt-link to="/home">
          <img
            src="/bolao-logo-white.svg"
            alt="Logo Bolão"
            class="mt-2"
            style="width: 15rem"
          >
        </nuxt-link>
      </div>
    </div>
</template>

<style scoped>
  .header {
    background-color: var(--primary-color);
  }

  .logo{
    cursor:pointer;
  }
</style>
