<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-help-circle-outline"></v-icon> Questions
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="70%"
    >
      <v-card>
        <v-card
          absolute
          class="rounded-0 rounded-t py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Test Questions </span>
            <v-spacer />
            <v-btn
              density="comfortable"
              variant="outlined"
              icon="mdi-close"
              @click="close"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-divider />
        <TableView
          v-bind:questions="props.module.questions"
          v-bind:module="props.module"
          v-bind:index="index"
        />
      </v-card>
    </v-dialog>
  </v-list-item>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useQuestionsModule().isLoading" />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import TableView from "./TableView.vue";

import { useQuestionsModule } from "@/store";

import Module from "@/types/Module";

const dialog = ref<boolean>(false);
const props = defineProps<{
  module: Module;
  index: number;
}>();

const success = ref({
  show: (message: string) => {
    return message;
  },
});

const error = ref({
  show: (message: string) => {
    return message;
  },
});

const close = () => {
  dialog.value = !dialog.value;
};

provide("success", success);
provide("error", error);
</script>
