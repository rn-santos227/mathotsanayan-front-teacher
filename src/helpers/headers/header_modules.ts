import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Module Title",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Number of Items",
    align: "start",
    sortable: true,
    key: "questions.length",
  },
  {
    title: "Module Subject",
    align: "start",
    sortable: true,
    key: "subject.name",
  },
  {
    title: "Action",
    align: "end",
    sortable: false,
    key: "action",
    width: "10%",
  },
];

export default headers;
