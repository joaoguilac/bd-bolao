<template>
  <div>
    <Header></Header>
      <b-container class="box-form">
        <h1 id="title" class="text-center my-5">Meu Perfil</h1>
        <form>
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Escolha sua foto do perfil"
            drop-placeholder="Arraste sua imagem aqui"
            class="p-3 mb-4"
            accept="image/jpeg, image/png, image/jpg"
          ></b-form-file>
          <input
          required
          type="text"
          v-model="nome"
          class="form-control p-3"
          placeholder="Nome"
        />
        <br />
          <input
          required
          type="text"
          v-model="sobrenome"
          class="form-control p-3"
          placeholder="Sobrenome"
        />
        <br />
        <input
          required
          type="text"
          v-model="telefone"
          class="form-control p-3"
          placeholder="Telefone"
        />
        <br />
        </form>
        </b-container>

  </div>
</template>

<script>
export default {

  name: "Perfil",
  data() {
    return {
      file: null,
      nome: "",
      sobrenome: "",
      telefone: ""
    };
  },
};
</script>


<style scoped>
#title {
  color: #6a6180;
  font-size: 1.9rem;
}
.box-form {
  color: var(--text-color);
}
</style>
