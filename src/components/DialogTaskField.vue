<template>
  <div class="text-center pa-4">
    <v-dialog v-model="props.dialog" max-width="400" persistent>
      <v-card>
        <v-card-title class="text-h5">Editar Tarefa</v-card-title>
        <v-text-field 
        v-model="props.task.title"
        label="Título"></v-text-field>
        <v-text-field 
        v-model="props.task.description"
        label="Descrição"></v-text-field>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="$emit('toogle')"> Cancelar </v-btn>

          <v-btn @click="$emit('toogle')"> Ok </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  dialog: Boolean,
  task : Object
});
</script>