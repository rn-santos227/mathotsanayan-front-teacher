import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Course Name",
    align: "start",
    sortable: true,
    key: "full_name",
  },
  {
    title: "Course Abbreviaton",
    align: "start",
    sortable: true,
    key: "abbreviation",
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
