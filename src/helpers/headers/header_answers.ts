import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Evaluation",
    align: "start",
    sortable: true,
    key: "grade.evaluation",
  },
  {
    title: "Answer Content",
    align: "start",
    sortable: false,
    key: "content",
  },
  {
    title: "Question Content",
    align: "start",
    sortable: false,
    width: "40%",
    key: "question.content",
  },
  {
    title: "Attempts",
    align: "start",
    sortable: true,
    key: "attempts",
  },
  {
    title: "Time",
    align: "start",
    sortable: true,
    key: "timer",
  },
];

export default headers;
