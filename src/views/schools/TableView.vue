<template>
  <v-card variant="flat">
    <v-row class="mt-1">
      <v-spacer />
      <v-text-field
        class="mr-4"
        v-model="search"
        label="Search School"
        density="compact"
        variant="outlined"
      />
    </v-row>
  </v-card>
  <v-divider />
  <v-data-table
    class="w-100"
    :search="search"
    :items="schools"
    :headers="headers"
    :loading="useSchoolsModule().isTableLoading"
    item-value="name"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-left">
          {{ item.name }}
        </td>
        <td class="text-left">
          {{ item.contact_number }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <UpdateView v-bind:school="item" />
                <DeleteView v-bind:school="item" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useSchoolsModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import { useSchoolsModule } from "@/store";

import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";
import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_schools";
import School from "@/types/School";

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

const search = ref<string>("");
const schoolModule = useSchoolsModule();
const schools = computed<School[]>(() => schoolModule.getSchools);

onMounted(async () => {
  await useSchoolsModule().read();
});

provide("success", success);
provide("error", error);
</script>
