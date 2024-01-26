export default [
  {
    text: "Introduction",
    page: "intro",
    subpages: [],
  },
  {
    text: "Dashboard",
    page: "dahsboard",
    subpages: [],
  },
  {
    text: "Students",
    page: "students",
    subpages: [
      {
        text: "Students",
        page: "students-main",
      },
      {
        text: "Filter Search",
        page: "students-search",
      },
      {
        text: "Students Creation",
        page: "students-create",
      },
      {
        text: "Students Update",
        page: "students-update",
      },
      {
        text: "Students Deletion",
        page: "students-delete",
      },
    ],
  },
  {
    text: "Reports",
    page: "reports",
    subpages: [
      {
        text: "Reports",
        page: "reports-main",
      },
      {
        text: "Filter Search",
        page: "reports-search",
      },
      {
        text: "Reports Generation",
        page: "reports-generate",
      },
      {
        text: "Results Details",
        page: "reports-details",
      },
      {
        text: "Answers List",
        page: "reports-answers",
      },
      {
        text: "Result Invalidation",
        page: "reports-invalidate",
      },
    ],
  },
  {
    text: "Audit Trail",
    page: "audit",
    subpages: [
      {
        text: "Auidt Trail",
        page: "audit-main",
      },
      {
        text: "Filter Search",
        page: "audit-search",
      },
      {
        text: "Audit Details",
        page: "audit-details",
      },
    ],
  },
];
