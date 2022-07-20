<template>
  <div class="hamburger-menu">
    <div class="bar-top"></div>
    <div class="bar-middle"></div>
    <div class="bar-bottom"></div>
  </div>
</template>

<style scoped>
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
</style>

