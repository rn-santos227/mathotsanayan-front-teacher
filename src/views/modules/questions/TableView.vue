<template>
  <v-card-text>
    <v-text-field
      class="mr-4"
      v-model="search"
      label="Question Search"
      density="compact"
      variant="outlined"
    />
  </v-card-text>
  <v-divider />
  <v-card-text class="question-height">
    <v-data-table
      class="w-100"
      item-value="name"
      :search="search"
      :items="questions"
      :headers="headers"
      :loading="useQuestionsModule().isTableLoading"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-left">
            <ImageComponent
              class="my-4"
              v-bind:id="item.id"
              v-bind:file="item.file"
              v-bind:height="150"
              v-bind:width="150"
            />
          </td>
          <td class="text-left">
            {{ item.content }}
          </td>
          <td class="text-left">
            {{ item.type }}
          </td>
          <td class="text-left">
            {{ item?.corrects.length }}
          </td>
          <td class="text-left">
            {{ item?.options.length }}
          </td>
          <td>
            <v-btn block color="purple-darken-3" variant="outlined">
              <v-icon size="large">mdi-dots-horizontal</v-icon>
              <v-menu activator="parent" persistent>
                <v-list density="compact" variant="plain"> </v-list>
              </v-menu>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card-text>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import ImageComponent from "@/components/ImageComponent.vue";

import { useQuestionsModule } from "@/store";

import Question from "@/types/Question";
import headers from "@/helpers/headers/header_questions";
import Module from "@/types/Module";

const search = ref<string>("");
const questionModule = useQuestionsModule();
const questions = computed<Question[]>(() => questionModule.getQuestions);

const module_props = defineProps<{
  index: number;
  module: Module;
  questions?: Question[];
}>();

onMounted(async () => {
  const id = module_props.module.id;
  if (id) {
    await useQuestionsModule().read(id);
  }
});
</script>

<style scoped>
.question-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
