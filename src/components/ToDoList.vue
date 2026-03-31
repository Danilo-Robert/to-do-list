<template>
  <v-text-field
      label="Add Task"
      v-model="task.title"
      @keyup.enter="addTask"
    ></v-text-field>
    

    <ListTasks :tasks="tasks"/>
</template>

<script setup lang="ts">
import ListTasks from './ListTasks.vue';

import { ref } from "vue";

const tasks = ref([
  { title: "Week 1", description: "Game out vs @Broncos" },
  { title: "Week 2", description: "Practice" },
]);


const task = ref({
  title: "",
  description: "",
});

const addTask = () => {
  tasks.value.push({
    title: task.value.title,
    description: "Description",
  });
  task.value = {
    title: "",
    description: "",
  };
};
</script>