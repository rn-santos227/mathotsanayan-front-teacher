<template>
  <v-app-bar color="purple-darken-3" dark elevation="1" app>
    <v-toolbar-title class="text-h5 font-weight-bold">
      {{ props.title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="authModule.isAuthenticated" class="mr-2">
      <HelpView />
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            density="comfortable"
            icon="mdi-account-circle-outline"
            size="x-large"
          >
          </v-btn>
        </template>
        <v-list density="compact" variant="plain">
          <PasswordView />
          <v-divider></v-divider>
          <v-list-item @click.prevent="logout()">
            <template v-slot:prepend>
              <v-icon icon="mdi-logout-variant"></v-icon>
            </template>
            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
  <QuestionDialogComponent ref="confirm" @confirm="handeConfirm" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthModule } from "@/store";
import { useRouter } from "vue-router";

import QuestionDialogComponent from "../dialogs/QuestionDialogComponent.vue";
import PasswordView from "@/views/auth/PasswordView.vue";
import HelpView from "@/views/help/DialogView.vue";

const confirm = ref({
  show: (message: string) => {
    return message;
  },
});
const router = useRouter();

const authModule = useAuthModule();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const handeConfirm = async () => {
  await authModule.logout();
  if (!authModule.isAuthenticated) {
    router.push("/login");
  }
};

const logout = () => {
  confirm.value.show("Are you sure you want to log off?");
};
</script>
