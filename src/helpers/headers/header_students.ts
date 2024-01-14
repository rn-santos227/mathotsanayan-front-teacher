import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Student Name",
    align: "start",
    sortable: true,
    key: "fullname",
  },
  {
    title: "Student Section",
    align: "start",
    sortable: true,
    key: "section.name",
  },
  {
    title: "Student Email",
    align: "start",
    sortable: true,
    key: "email",
  },
  {
    title: "Student School",
    align: "start",
    sortable: true,
    key: "school.name",
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
