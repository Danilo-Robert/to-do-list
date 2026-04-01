<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
      <v-card
        prepend-icon="mdi-map-marker"
        text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        title="Use Google's location service?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn 
          color="red"
          variant="text"
          @click="taskStore.toogleDelete"> No </v-btn>

          <v-btn 
          variant="text"
          color="green-darken-1"
          @click="taskStore.deleteTask"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/task';

const taskStore = useTaskStore();
</script>