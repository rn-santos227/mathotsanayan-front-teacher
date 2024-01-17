<template>
  <v-data-table
    class="w-100"
    item-value="name"
    :items="courses"
    :headers="headers"
    :loading="useCoursesModule().isTableLoading"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-left">
          {{ item.name }}
        </td>
        <td class="text-left">
          {{ item.abbreviation }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <UpdateView v-bind:course="item" />
                <DeleteView v-bind:course="item" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useCoursesModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import { useCoursesModule } from "@/store";

import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_courses";
import Course from "@/types/Course";

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

const courseModule = useCoursesModule();
const courses = computed<Course[]>(() => courseModule.getCourses);

onMounted(async () => {
  await useCoursesModule().read();
});

provide("success", success);
provide("error", error);
</script>
