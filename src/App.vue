<template>
  <v-app id="inspire">
    <HeaderComponent :title="title" />
    <NavigationComponent />
    <v-main class="base">
      <router-view />
    </v-main>
    <LoadingDialogComponent v-bind:activate="authModule.isLoading" />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthModule } from "./store";

import HeaderComponent from "./components/shared/HeaderComponent.vue";
import NavigationComponent from "./components/shared/NavigationComponent.vue";
import LoadingDialogComponent from "./components/dialogs/LoadingDialogComponent.vue";

const authModule = useAuthModule();
const title = ref<string>("MatHOTsanayan Teacher");

async function fetchUserData() {
  try {
    await authModule.fetchUserData();
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserData();
</script>

<style>
.base {
  background-color: #fffde7;
}

.v-field__field,
.v-field__overlay {
  background-color: #fffde7;
}

.v-data-table-header__content > span {
  font-weight: bolder;
}

.hide-scroll {
  overflow-y: hidden;
}
</style>
