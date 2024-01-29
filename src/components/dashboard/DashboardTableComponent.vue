<template>
  <v-card class="ma-4" elevation="3">
    <v-card-title>
      <span class="text-h6 font-weight-bold text-purple">
        Modules Passing-Failure Table
      </span>
    </v-card-title>
    <v-divider />
    <div
      class="d-flex align-center justify-center table-height"
      v-if="useDashboardModule().isLoading"
    >
      <v-progress-circular
        color="purple-darken-3"
        width="16"
        size="160"
        indeterminate
      />
    </div>
    <div v-else class="table-height">
      <v-table>
        <thead>
          <tr>
            <th class="font-weight-bold">Module Name</th>
            <th class="text-center font-weight-bold">Total</th>
            <th class="text-center font-weight-bold">Passed</th>
            <th class="text-center font-weight-bold">Failed</th>
            <th class="text-center font-weight-bold">Passing Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(resModule, index) in useDashboardModule().resultModules"
            :key="index"
          >
            <td>{{ resModule.module.name }}</td>
            <td class="text-center">{{ resModule.total }}</td>
            <td class="text-center">{{ resModule.passed }}</td>
            <td class="text-center">{{ resModule.failed }}</td>
            <td class="text-center">
              {{ ((resModule.passed / resModule.total) * 100).toFixed(2) }}%
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDashboardModule } from "@/store";
</script>

<style scoped>
.table-height {
  height: 470px;
  overflow-y: auto;
}
</style>
