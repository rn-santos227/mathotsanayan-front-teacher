<template>
  <v-btn
    variant="outlined"
    color="purple-darken-3"
    prepend-icon="mdi-file-excel"
    height="40"
    @click.prevent="exportToExcel"
  >
    Download Excel
  </v-btn>
</template>

<script setup lang="ts">
import * as XLSX from "../../../plugin/xlsx";
import { evaluateExam, secondsToMinutes } from "@/helpers/evaluation";
import { useResultsModule } from "@/store";
import Section from "@/types/Section";

const exportToExcel = async () => {
  const data: string[][] = [
    [
      "Student Name",
      "Section",
      "Module Name",
      "Stage",
      "Score Result",
      "Grade",
      "Total Time",
    ],
  ];
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  useResultsModule().getResults.forEach((item) => {
    const row: string[] = [];
    row.push(item.student.full_name ?? "");
    row.push((item.student.section as Section)?.name ?? "");
    row.push(item.module.name ?? "");
    row.push(`Stage ${item.module.step}`);
    row.push(`${item.total_score} / ${item.items}`);
    row.push(evaluateExam(item) ?? "");
    row.push(secondsToMinutes(item.timer));
    data.push(row);
  });

  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `Generate-Exam-Result-${formattedDate}.xlsx`);
};
</script>
