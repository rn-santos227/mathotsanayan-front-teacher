<template>
  <v-container fluid>
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="schoolCard"
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
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDashboardModule } from "@/store";

import DashboardCardComponent from "@/components/dashboard/DashboardCardComponent.vue";
import DashboardCard from "@/interfaces/DashboardCard";

const schoolCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.schools,
  title: "Total Schools",
  link: "/schools",
  color: "primary",
  icon: "mdi-school",
});

const sectionCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.schools,
  title: "Teacher Sections",
  link: "/sections",
  color: "purple",
  icon: "mdi-chair-school",
});

const studentCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.students,
  title: "Teacher Students",
  link: "/students",
  color: "deep-purple",
  icon: "mdi-account-school",
});

const resultCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.results,
  title: "Students Results",
  link: "/reports",
  color: "indigo",
  icon: "mdi-sticker-check-outline",
});

onMounted(async () => {
  await useDashboardModule().read();
  schoolCard.value.count = useDashboardModule().getDashboard.schools;
  sectionCard.value.count = useDashboardModule().getDashboard.sections;
  studentCard.value.count = useDashboardModule().getDashboard.students;
  resultCard.value.count = useDashboardModule().getDashboard.results;
});
</script>
