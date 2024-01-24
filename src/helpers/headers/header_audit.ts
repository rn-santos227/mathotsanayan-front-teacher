import type { VDataTable } from "vuetify/lib/components/index.mjs";
type ReadonlyHeaders = InstanceType<typeof VDataTable>["headers"];
const headers: ReadonlyHeaders = [
  {
    title: "Activity",
    align: "start",
    sortable: true,
    key: "activity",
  },
  {
    title: "Table",
    align: "start",
    sortable: true,
    key: "table",
  },
  {
    title: "Timestamp",
    align: "start",
    sortable: true,
    key: "created_at",
  },
  {
    title: "Action",
    align: "end",
    sortable: true,
    width: "10%",
  },
];

export default headers;
