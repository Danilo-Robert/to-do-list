<template>
  <div class="alert-notification">
    <v-alert
      text="Tarefa adicionada com sucesso!"
      class="animate__animated animate__shakeX"
      type="success"
      closable
    ></v-alert>
  </div>
</template>

<script setup>
import 'animate.css';

</script>

<style scoped>
 .alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 46% 0 30%;
}
</style>