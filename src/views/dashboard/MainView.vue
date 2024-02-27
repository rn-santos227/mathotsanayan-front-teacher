<template>
  <v-container fluid>
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="moduleCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="sectionCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="studentCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="resultCard"
      />
    </div>
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardPieGraphComponent class="flex-grow-0 card-width-pie" />
      <DashboardTableComponent class="flex-grow-1 card-width" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDashboardModule } from "@/store";

import DashboardCardComponent from "@/components/dashboard/DashboardCardComponent.vue";
import DashboardPieGraphComponent from "@/components/dashboard/DashboardPieGraphComponent.vue";
import DashboardTableComponent from "@/components/dashboard/DashboardTableComponent.vue";
import DashboardCard from "@/interfaces/DashboardCard";

const moduleCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.modules,
  title: "Total Modules",
  link: "/modules",
  color: "indigo",
  icon: "mdi-text-box-check",
});

const sectionCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.sections,
  title: "Total Sections",
  link: "/sections",
  color: "purple",
  icon: "mdi-chair-school",
});

const studentCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.students,
  title: "Total Students",
  link: "/students",
  color: "deep-purple",
  icon: "mdi-account-school",
});

const resultCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.results,
  title: "Total Results",
  link: "/reports",
  color: "indigo",
  icon: "mdi-sticker-check-outline",
});

onMounted(async () => {
  useDashboardModule().isLoading = true;
  await Promise.all([
    useDashboardModule().modules(),
    useDashboardModule().ratio(),
    useDashboardModule().read(),
  ]);
  moduleCard.value.count = useDashboardModule().getDashboard.modules;
  sectionCard.value.count = useDashboardModule().getDashboard.sections;
  studentCard.value.count = useDashboardModule().getDashboard.students;
  resultCard.value.count = useDashboardModule().getDashboard.results;
  useDashboardModule().isLoading = false;
});
</script>

<style scoped>
.card-width {
  width: 180px;
}

.card-width-pie {
  width: 490px;
}
</style>
