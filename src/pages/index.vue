<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"></Alert>
    <View></View>
  </v-app>
</template>

<script lang="ts" setup>
import View from './view.vue';
import Alert from '../components/Alert.vue';
import { useAlertStore } from '../stores/alert.ts';

const alertStore = useAlertStore();
</script> 