<template>
  <div class="position-relative w-50 box-input">
    <input
      required
      id="searchInput"
      type="text"
      v-model="search"
      class="form-control input-search"
      placeholder="Digite o nome do bolão ou campeonato que deseja participar"
      @input="this.$emit('search', search)"
    >
    <label for="searchInput" class="ml-4 mt-2">Filtrar</label>
    <div class="btn-search h-100 mr-4">
      <b-icon icon="funnel-fill" class="ml-3 icon-search"></b-icon>
    </div>
  </div>
</template>

<script>

export default {
    name: "Search",
    data() {
        return {
            search: "",
        };
    }
};
</script>

<style scoped>
.input-search {
  border: 1px solid var(--primary-color);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 2.5rem;
}

.box-input {
  bottom: 2rem;
}

label {
  position: absolute;
  color: var(--text-color);
  font-size: 0.8rem;
  font-weight: 600;
  top: 0;
  left: 15px;
}

.box-search {
  position: absolute;
  top: 7rem;
}

.btn-search {
  position: absolute;
  top: 35%;
  right: 0;
}

.icon-search {
  color: var(--primary-color);
  font-size: 2rem;
  cursor: pointer;
}

.icon-search:hover {
  color: #16a251;
}

input:placeholder-shown {
  text-overflow: ellipsis;
}

</style>
