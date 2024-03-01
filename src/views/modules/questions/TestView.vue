<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-lead-pencil"></v-icon> Test
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4 mb-2">
            <span class="text-h6">
              Question ID: {{ padLeft(props.question.id) }}
            </span>
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
        <v-card-text class="question-height">
          <v-row>
            <v-col class="mx-4">
              <div class="text-body-1">{{ props.question.content }}</div>
            </v-col>
          </v-row>
          <v-row v-if="props.question.file">
            <v-col class="d-flex justify-center align-center">
              <ImageComponent
                v-bind:id="props.question.id"
                v-bind:file="props.question.file"
                v-bind:height="350"
                v-bind:width="350"
                v-model:trigger="dialog"
              />
            </v-col>
          </v-row>
          <v-divider class="my-4" />
          <v-row v-if="props.question.type == 'word problem'">
            <v-col>
              <v-text-field
                class="mx-4"
                v-model.trim="state.content"
                label="Provide your answer here."
                density="compact"
                variant="outlined"
              />
            </v-col>
          </v-row>
          <v-row v-else-if="props.question.type == 'multiple selection'">
          </v-row>
          <v-row v-else-if="props.question.type == 'single correct'">
            <v-radio-group class="ma-6" v-model.trim="state.content">
              <div class="d-flex justify-space-around flex-wrap">
                <v-card
                  width="400"
                  class="ma-2"
                  v-for="(option, index) in props.question.options"
                  :key="index"
                  :color="changeColor(option.content)"
                  @click.prevent="selectAnswer(option.content)"
                >
                  <v-radio :value="option.content" />
                  <ImageComponent
                    class="mx-auto"
                    v-if="option.file"
                    v-bind:id="props.question.id"
                    v-bind:file="option.file"
                    v-bind:height="200"
                    v-bind:width="250"
                  />
                  <v-card-text class="mx-4 mb-4">
                    {{ option.content }}
                  </v-card-text>
                </v-card>
              </div>
            </v-radio-group>
          </v-row>
        </v-card-text>
        <v-divider class="mb-2 mt-auto" />
        <v-card-actions class="text-right">
          <v-spacer />
          <v-btn
            class="mb-1 mr-4"
            variant="elevated"
            width="200"
            dark
            color="success"
            prepend-icon="mdi-check"
            @click.prevent="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list-item>
  <CorrectDialogComponent ref="correct" />
  <InformationDialogComponent ref="info" />
  <LoadingDialogComponent :activate="useTestModule().isLoading" />
  <WrongDialogComponent ref="wrong" />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useTestModule } from "@/store/modules/test_module";
import { padLeft } from "@/helpers/utils";

import ImageComponent from "@/components/ImageComponent.vue";

import CorrectDialogComponent from "@/components/dialogs/CorrectDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";
import InformationDialogComponent from "@/components/dialogs/InformationDialogComponent.vue";
import WrongDialogComponent from "@/components/dialogs/WrongDialogComponent.vue";

import Question from "@/types/Question";
import Answer from "@/types/Answer";

const dialog = ref<boolean>(false);
const info = ref({
  show: (message: string) => {
    return message;
  },
});

const correct = ref({
  show: (message: string) => {
    return message;
  },
});

const wrong = ref({
  show: (message: string) => {
    return message;
  },
});

const props = defineProps<{
  question: Question;
}>();

const state = reactive<Answer>({
  id: props.question.id,
  content: "",
  module: props.question.module,
  question: props.question.id,
});

const close = () => {
  dialog.value = !dialog.value;
};

const submit = async () => {
  if (state.content) {
    useTestModule()
      .submit(state)
      .then((response) => {
        if (response?.correct) {
          correct.value.show(response?.solution);
        } else {
          wrong.value.show(response?.solution);
        }
      });
  } else {
    info.value.show("You have not provided an answer.");
  }
};

const changeColor = (content: string) => {
  return content === state.content ? "purple-darken-3" : "white";
};

const selectAnswer = (answer: string) => {
  state.content = answer;
};
</script>

<style scoped>
.question-height {
  overflow-y: auto;
}
</style>
