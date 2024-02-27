import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Section",
    align: "start",
    sortable: true,
    key: "name",
  },
  {
    title: "Number of Students",
    align: "start",
    sortable: true,
    key: "level",
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
