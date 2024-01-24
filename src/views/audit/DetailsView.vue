<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-magnify"></v-icon> Details
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Activity ID: {{ padLeft(state.id) }} </span>
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
        <v-card-text class="pb-6">
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model.trim="state.ip_address"
                label="IP Address"
                density="compact"
                variant="outlined"
                hide-details
                readonly
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model.trim="state.activity"
                label="Audit Activity"
                density="compact"
                variant="outlined"
                hide-details
                readonly
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model.trim="state.table"
                label="Audited Table"
                density="compact"
                variant="outlined"
                hide-details
                readonly
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                rows="8"
                v-model="state.content"
                label="Audit Content"
                density="compact"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { padLeft } from "@/helpers/utils";

import Audit from "@/types/Audit";

const dialog = ref<boolean>(false);
const props = defineProps<{
  audit: Audit;
}>();
const state = reactive<Audit>({ ...props.audit });
const close = () => {
  dialog.value = !dialog.value;
};
</script>
