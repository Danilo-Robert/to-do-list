<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        src="https://www.kansascommerce.gov/wp-content/uploads/2025/12/Artboard-1-3.jpg"
        gradient="to top right, rgba(139, 0, 0, 1), rgba(128,208,199,.8)"
        height="80"
        cover
        class="pt-2"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdBt4R7qOfuZFMK7Wm80Xg_0Di3ZOcPjfuw&s"
            subtitle="Quaterback 1"
            title="Patrick Mahomes III"
          >
          </v-list-item>
        </v-list>
      </v-img>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <RouterLink v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title :textContent="item.text"></v-list-item-title>
          </v-list-item>
        </RouterLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnNXCzQkSDZJ57sxaAkr1zO1WkXLuMqmdaQ&s"
      density="prominent"
      height="40"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(139, 0, 0, 1), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Lista de Tarefas</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

const items = [
  { text: "Inicio", icon: "mdi-folder", to: "/" },
  { text: "Sobre", icon: "mdi-account-multiple", to: "/about" },
];
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
}
</style>