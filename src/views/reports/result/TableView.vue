<template>
  <v-data-table
    class="w-100"
    :items="useAnswersModule().getAnswers"
    :loading="useAnswersModule().isLoading"
    :headers="headers"
    item-value="id"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-left">
          <span :class="getGradeEvaluation(item.grade)">
            {{ getGradeEvaluation(item.grade) }}
          </span>
        </td>
        <td class="text-left">
          {{ item.content }}
        </td>
        <td class="text-left">
          {{ getQuestionContent(item.question) }}
        </td>
        <td class="text-left">
          {{ item.attempts }}
        </td>
        <td class="text-left">
          {{ secondsToMinutes(item.timer) }}
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { getQuestionContent, getGradeEvaluation } from "@/helpers/instance";
import { useAnswersModule } from "@/store";
import { secondsToMinutes } from "@/helpers/evaluation";
import headers from "@/helpers/headers/header_answers";
</script>

<style scoped>
.correct {
  color: green;
}

.wrong {
  color: red;
}
</style>
