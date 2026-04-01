<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"></Alert>
    <View></View>
  </v-app>
</template>

<script lang="ts" setup>
import View from './view.vue';
import Alert from '../components/shared/Alert.vue';
import { useAlertStore } from '../stores/alert';

const alertStore = useAlertStore();
</script> 