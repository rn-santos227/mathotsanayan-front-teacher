<template>
  <form class="my-3">
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model.trim="studentName"
          label="Student Name"
          variant="outlined"
          hide-details
          readonly
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model.trim="sectionName"
          label="Student Section"
          variant="outlined"
          hide-details
          readonly
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model.trim="moduleName"
          label="Module Title"
          variant="outlined"
          hide-details
          readonly
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field
          :class="`font-weight-bold text-${
            evaluateExam(props.result) === 'Passed' ? 'green' : 'red'
          }`"
          v-model.trim="grade"
          label="Remarks"
          variant="outlined"
          hide-details
          readonly
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model.trim="totalTime"
          label="Total Time"
          variant="outlined"
          hide-details
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model.trim="averageTime"
          label="Average Time"
          variant="outlined"
          hide-details
        />
      </v-col>
    </v-row>
  </form>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  evaluateExam,
  secondsToMinutes,
  getAverageTime,
} from "@/helpers/evaluation";
import { getSectionName } from "@/helpers/instance";

import Result from "@/types/Result";

const props = defineProps<{
  result: Result;
}>();

const moduleName = computed<string | undefined>(() => props.result.module.name);

const studentName = computed<string | undefined>(
  () => props.result.student.full_name
);

const sectionName = computed<string | undefined>(() =>
  getSectionName(props.result.student.section)
);

const averageTime = computed<string | undefined>(() =>
  getAverageTime(props.result.timer, props.result.items)
);

const grade = computed<string | undefined>(() => evaluateExam(props.result));
const totalTime = computed<string | undefined>(() =>
  secondsToMinutes(props.result.timer)
);
</script>
