<template>
  <div>

    <v-text-field 
    label="Add Task"
    v-model="task.title"
    @keyup.enter="addTask"></v-text-field>
    
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-item
        v-for="task, index in tasks"
        :key="index"
        :subtitle="task.description"
        :title="task.title"
        :value="index"
      >
        <template v-slot:prepend="{ isSelected, select }">
          <v-list-item-action start>
            <v-checkbox-btn
              :model-value="isSelected"
              @update:model-value="select"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

    const tasks = ref ([
    { title: "Week 1", description: "Game out vs @Broncos" },
    { title: "Week 2", description: "Practice" },

  ]);

    const settingsSelection = ref([])

    const task = ref({
        title: "",
        description: ""
    });

    const addTask = () => {
      tasks.value.push({
        title: task.value.title,
        description: task.value.description
      })
        task.value = {
            title: "",
            description: ""
        }
    }
</script>