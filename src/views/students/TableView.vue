<template>
  <v-card-text>
    <v-card variant="flat">
      <v-row class="mt-1">
        <v-spacer />
        <v-text-field
          class="mr-4"
          v-model="search"
          label="Search Student"
          density="compact"
          variant="outlined"
        />
        <v-btn
          class="ml-4"
          variant="outlined"
          color="purple-darken-3"
          prepend-icon="mdi-refresh"
          height="40"
          width="180"
          @click.prevent="resetSearch"
        >
          Reset List
        </v-btn>
      </v-row>
    </v-card>
  </v-card-text>
  <v-divider />
  <v-card-text class="table-height"> </v-card-text>
  <v-divider />
  <v-card-actions class="mt-auto pa-4 mb-12">
    <v-spacer />
    <span class="text-body-2">
      {{ useStudentsModule().page.from }}-{{ useStudentsModule().page.to }} of
      {{ useStudentsModule().page.total }}
    </span>
    <v-pagination
      color="purple-darken-3"
      v-model="useStudentsModule().page.current_page"
      :length="useStudentsModule().page.last_page"
      :total-visible="7"
    />
  </v-card-actions>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useStudentsModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from "vue";
import { useStudentsModule } from "@/store";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_students";
import Student from "@/types/Student";

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
const studentsModule = useStudentsModule();
const students = computed<Student[]>(() => studentsModule.getStudents);

let initialCallMade = false;

onMounted(async () => {
  if (initialCallMade) return;
  await useStudentsModule().read();
  initialCallMade = true;
});

const resetSearch = async () => {
  await useStudentsModule().read();
};

watch(
  () => useStudentsModule().page.current_page,
  async () => {
    if (!initialCallMade) return;
    await studentsModule.read(useStudentsModule().page.current_page);
  }
);

provide("success", success);
provide("error", error);
</script>

<style scoped>
.table-height {
  height: calc(100vh - 250px);
  overflow-y: auto;
}
</style>
