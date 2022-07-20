<template>
  <div class="border d-flex w-100">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
</template>

<style scoped>
  .border > span {
    width: 30%;
    height: 8px;
    display: block;
  }
  .border span:nth-child(1n),
  span:nth-child(4n) {
    background-color: var(--second-color);
  }
  .border span:nth-child(2n),
  span:nth-child(5n) {
    background-color: var(--primary-color);
  }
  .border span:nth-child(3n),
  span:nth-child(6n) {
    background-color: var(--danger-color);
  }

</style>
