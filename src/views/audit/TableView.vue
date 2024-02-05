<template>
  <v-card-text>
    <v-card variant="flat">
      <v-row class="mt-1">
        <v-spacer />
        <v-col class="d-flex">
          <v-text-field
            class="mr-4"
            v-model="search"
            label="Search Result"
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
      :items="audit"
      :headers="headers"
      :items-per-page="useAuditModule().page.per_page"
      :loading="useAuditModule().isTableLoading"
      :page="useAuditModule().page.current_page"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-left">
            {{ item.activity }}
          </td>
          <td class="text-left">
            {{ item.table }}
          </td>
          <td class="text-left">
            {{ formatDate(item.created_at) }}
          </td>
          <td>
            <v-btn block color="purple-darken-3" variant="outlined">
              <v-icon size="large">mdi-dots-horizontal</v-icon>
              <v-menu activator="parent">
                <v-list density="compact" variant="plain">
                  <DetailsView v-bind:audit="item" />
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
      {{ useAuditModule().page.from }}-{{ useAuditModule().page.to }} of
      {{ useAuditModule().page.total }}
    </span>
    <v-pagination
      color="purple-darken-3"
      v-model="useAuditModule().page.current_page"
      :length="useAuditModule().page.last_page"
      :total-visible="7"
    />
  </v-card-actions>
  <LoadingDialogComponent v-bind:activate="useAuditModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useAuditModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import DetailsView from "./DetailsView.vue";

import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_audit";
import Audit from "@/types/Audit";

const search = ref<string>("");
const auditModule = useAuditModule();
const audit = computed<Audit[]>(() => auditModule.getAudit);

let initialCallMade = false;

onMounted(async () => {
  if (initialCallMade) return;
  await useAuditModule().read();
  initialCallMade = true;
});

watch(
  () => useAuditModule().page.current_page,
  async () => {
    if (!initialCallMade) return;
    await auditModule.read(useAuditModule().page.current_page);
  }
);

const resetSearch = async () => {
  await useAuditModule().read();
};
</script>

<style scoped>
.table-height {
  height: calc(100vh - 410px);
  overflow-y: auto;
}
</style>
