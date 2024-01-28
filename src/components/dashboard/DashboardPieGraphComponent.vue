<template>
  <v-card class="ma-4" elevation="3">
    <v-card-title>
      <span class="text-h6 font-weight-bold text-purple-darken-3">
        Module Passed-Failed Ratio
      </span>
    </v-card-title>
    <v-divider />
    <div
      class="d-flex align-center justify-center"
      v-if="useDashboardModule().isLoading"
    >
      <v-progress-circular
        class="top-margin-loading"
        color="purple-darken-3"
        width="16"
        size="160"
        indeterminate
      />
    </div>
    <div v-else class="ma-6">
      <DoughnutChart v-bind="doughnutChartProps" />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { useDashboardModule } from "@/store";

Chart.register(...registerables);
const dataLabels = ref(["Passed", "Failed"]);

const modulesData = computed<ChartData<"doughnut">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: [
        useDashboardModule().graphPie.passed,
        useDashboardModule().graphPie.failed,
      ],
      backgroundColor: ["#4CAF50", "#F44336"],
      hoverOffset: 4,
    },
  ],
}));

const options = computed<ChartOptions<"doughnut">>(() => ({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
}));

const { doughnutChartProps } = useDoughnutChart({
  chartData: modulesData,
  options,
});
</script>

<style scoped>
.top-margin-loading {
  margin-top: 150px;
}
</style>
