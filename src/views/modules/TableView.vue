<template>
  <v-card-text>
    <v-card variant="flat">
      <v-row class="mt-1">
        <v-spacer />
        <v-col class="d-flex">
          <v-text-field
            class="mr-4"
            v-model="search"
            label="Search Module"
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
        </v-col>
      </v-row>
    </v-card>
  </v-card-text>
  <v-divider />
  <v-card-text class="table-height">
    <v-data-table
      class="w-100"
      item-value="name"
      :search="search"
      :items="modules"
      :headers="headers"
      :items-per-page="useModulesModule().page.per_page"
      :loading="useModulesModule().isTableLoading"
      :page="useModulesModule().page.current_page"
    >
      <template v-slot:item="{ item, index }">
        <tr>
          <td class="text-xs-left">
            {{ item.name }}
          </td>
          <td class="text-xs-left">
            {{ item?.questions?.length }}
          </td>
          <td class="text-xs-left">
            {{ getSubjectName(item?.subject) }}
          </td>
          <td>
            <v-btn block color="purple-darken-3" variant="outlined">
              <v-icon size="large">mdi-dots-horizontal</v-icon>
              <v-menu activator="parent">
                <v-list density="compact" variant="plain">
                  <DetailsView v-bind:module="item" />
                  <QuestionView v-bind:module="item" v-bind:index="index" />
                </v-list>
              </v-menu>
            </v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:bottom> </template>
    </v-data-table>
  </v-card-text>
  <v-divider />
  <v-card-actions class="mt-auto pa-4 mb-12">
    <v-spacer />
    <span class="text-body-2">
      {{ useModulesModule().page.from }}-{{ useModulesModule().page.to }} of
      {{ useModulesModule().page.total }}
    </span>
    <v-pagination
      color="purple-darken-3"
      v-model="useModulesModule().page.current_page"
      :length="useModulesModule().page.last_page"
      :total-visible="7"
    />
  </v-card-actions>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useModulesModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from "vue";
import { useModulesModule } from "@/store";
import { getSubjectName } from "@/helpers/instance";

import QuestionView from "./questions/DialogView.vue";
import DetailsView from "./DetailsView.vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_modules";
import Module from "@/types/Module";

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
const moduleModule = useModulesModule();
const modules = computed<Module[]>(() => moduleModule.getModules);

let initialCallMade = false;

onMounted(async () => {
  if (initialCallMade) return;
  await useModulesModule().read();
  initialCallMade = true;
});

watch(
  () => useModulesModule().page.current_page,
  async () => {
    if (!initialCallMade) return;
    await moduleModule.read(useModulesModule().page.current_page);
  }
);

const resetSearch = async () => {
  await useModulesModule().read();
};

provide("success", success);
provide("error", error);
</script>

<style scoped>
.table-height {
  height: calc(100vh - 410px);
  overflow-y: auto;
}
</style>
