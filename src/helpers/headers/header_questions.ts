import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Image",
    align: "start",
    key: "image",
    sortable: false,
  },
  {
    title: "Question",
    align: "start",
    sortable: true,
    key: "content",
    width: "45%",
  },
  {
    title: "Question Type",
    align: "start",
    sortable: true,
    key: "type",
  },
  {
    title: "Number of Correct Answers",
    align: "start",
    sortable: true,
    key: "corrects.length",
  },
  {
    title: "Number of Options",
    align: "start",
    sortable: true,
    key: "options.length",
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
