<template>
  <div>

    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-item
        v-for="(task, index) in props.tasks"
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

        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                color="grey-lighten"
                icon="mdi-dots-vertical"
                variant="text"
                v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item :key="index" :value="index">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>

              <v-list-item :key="index" :value="index">
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ref } from "vue";

const props = defineProps({
  tasks: Object
});

const settingsSelection = ref([]);

</script>