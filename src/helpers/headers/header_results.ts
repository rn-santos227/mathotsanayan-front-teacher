import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Student Name",
    align: "start",
    sortable: true,
    key: "student.full_name",
  },
  {
    title: "Student Section",
    align: "start",
    sortable: true,
    key: "student.section.name",
  },
  {
    title: "Module Name",
    align: "start",
    sortable: true,
    key: "module.name",
  },
  {
    title: "Module Stage",
    align: "start",
    sortable: true,
    key: "module.step",
    width: "150",
  },
  {
    title: "Score Result",
    align: "start",
    sortable: false,
    key: "score",
    width: "140",
  },
  {
    title: "Grade",
    align: "start",
    sortable: false,
    key: "grade",
  },
  {
    title: "Total Time",
    align: "center",
    sortable: true,
    key: "timer",
    width: "140",
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
