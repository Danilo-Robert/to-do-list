<template>
  <v-text-field
      label="Adicionar tarefa"
      v-model="taskStore.titleTaskCreating"
      @keyup.enter="taskStore.addTask"
    ></v-text-field>
    

    <ListTasks/>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '../stores/task';

const taskStore = useTaskStore();

onMounted( () => {
  taskStore.getTasks();
})
</script>