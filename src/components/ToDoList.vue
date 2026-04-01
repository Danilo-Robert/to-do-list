<template>
  <v-text-field
      label="Adicionar tarefa"
      v-model="taskStore.titleTaskCreating"
      @keyup.enter="taskStore.addTask"
      :rules="rules"
    ></v-text-field>
    

    <ListTasks/>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '../stores/task';

const taskStore = useTaskStore();

const rules = [
    value => {
      if (!value || value.length >= 5) return true
      return 'You must enter Task title with more then 5 characters'
    },
  ];

onMounted( () => {
  taskStore.getTasks();
})

</script>