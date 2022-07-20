<template>
  <div>
    <Header></Header>
    <div class="box-search w-100 d-flex justify-content-center mb-5">
      <SearchInput></SearchInput>
    </div>

    <div class="boloes row p-4">
      <Card icon = "eye" text="Visualizar"></Card>
      <Card icon = "eye" text="Visualizar"></Card>
      <Card icon = "eye" text="Visualizar"></Card>
      <Card icon = "eye" text="Visualizar"></Card>
    </div>
  </div>
</template>

<script>
import SearchInput from '~/components/SearchInput.vue';
export default {
    name: "MeusBoloes",
    components: { SearchInput }
};
</script>

<style scoped>

.boloes {
  margin: 5rem 0 3rem 1rem;
}
</style>
