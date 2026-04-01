<template>
  <div class="alert-notification">
    <v-alert
      text="Tarefa adicionada com sucesso!"
      type="success"
      closable
    ></v-alert>
  </div>
</template>

<style scoped>
 .alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 46% 0 30%;
}
</style>