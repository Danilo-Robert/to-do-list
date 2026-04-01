<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
      <v-card
        prepend-icon="mdi-map-marker"
        text="This action cannot be undone"
        title="Sure you want to delete this task?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn 
          color="red-darken-1"
          variant="elevated"
          @click="taskStore.toogleDelete"> No </v-btn>

          <v-btn 
          variant="outlined"
          color="green-darken-1"
          @click="taskStore.deleteTask"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from '../../stores/task';

const taskStore = useTaskStore();
</script>