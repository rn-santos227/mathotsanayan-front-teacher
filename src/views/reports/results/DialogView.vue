<template>
  <v-list-item @click.prevent="getAnswers">
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-magnify"></v-icon> Details
    </v-list-item-title>
    <v-dialog class="ma-auto" persistent v-model="dialog" activator="parent">
      <v-card>
        <v-card class="rounded-0 rounded-t py-2" color="purple-darken-3" flat>
          <v-card-actions class="mx-4">
            <span class="text-h6"> Examination Result </span>
            <v-spacer />
            <v-btn
              density="comfortable"
              variant="outlined"
              icon="mdi-close"
              @click="close"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card-text v-if="useAnswersModule().isLoading" class="answers-height">
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="purple-darken-3"
              width="16"
              size="160"
              indeterminate
            >
              Loading
            </v-progress-circular>
          </div>
        </v-card-text>
        <v-card-text v-else class="answers-height">
          <FormView v-bind:result="props.result" />
          <v-divider class="my-4" />
          <div class="d-flex justify-space-around flex-wrap">
            <div class="ma-2">
              <ResultComponent
                v-bind:color="'cyan'"
                v-bind:title="'Score'"
                v-bind:data="`${props.result.total_score} / ${props.result.items}`"
                v-bind:value="grade(props.result)"
              />
            </div>
            <div class="ma-2">
              <ResultComponent
                v-bind:color="'teal'"
                v-bind:title="'Grade'"
                v-bind:data="`${grade(props.result).toFixed(2)}%`"
                v-bind:value="grade(props.result)"
              />
            </div>
            <div class="ma-2">
              <ResultComponent
                v-bind:color="'green'"
                v-bind:title="'Total Attempts'"
                v-bind:data="`${useAnswersModule().getAnswers?.length}`"
                v-bind:value="
                  accuracy(props.result, useAnswersModule().getAnswers)
                "
              />
            </div>
            <div class="ma-2">
              <ResultComponent
                v-bind:color="'light-green'"
                v-bind:title="'Accuracy'"
                v-bind:data="`${accuracy(
                  props.result,
                  useAnswersModule().getAnswers
                ).toFixed(2)}%`"
                v-bind:value="
                  accuracy(props.result, useAnswersModule().getAnswers)
                "
              />
            </div>
            <div class="ma-2">
              <ResultComponent
                v-bind:color="'red'"
                v-bind:title="'Total Skips'"
                v-bind:data="`${skips(useAnswersModule().getAnswers)}`"
                v-bind:value="
                  skipAverage(useAnswersModule().getAnswers, props.result.items)
                "
              />
            </div>
          </div>
          <v-divider class="mt-4" />
          <TableView />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { grade, accuracy, skips, skipAverage } from "@/helpers/evaluation";
import { useAnswersModule } from "@/store";

import ResultComponent from "@/components/ResultComponent.vue";
import FormView from "./FormView.vue";
import TableView from "./TableView.vue";

import Result from "@/types/Result";

const dialog = ref<boolean>(false);
const props = defineProps<{
  result: Result;
}>();

const close = () => {
  dialog.value = !dialog.value;
};

const getAnswers = async () => {
  await useAnswersModule().read(props.result.id);
};
</script>

<style scoped>
.answers-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
