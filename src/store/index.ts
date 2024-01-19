import { createPinia } from "pinia";
import { useAnswersModule } from "./modules/answers_module";
import { useAuditModule } from "./modules/audit_modules";
import { useAuthModule } from "./modules/auth_module";
import { useCoursesModule } from "./modules/courses_module";
import { useDashboardModule } from "./modules/dashboard_module";
import { useResultsModule } from "./modules/results_module";
import { useSchoolsModule } from "./modules/schools_module";
import { useSectionsModule } from "./modules/sections_module";
import { useStudentsModule } from "./modules/students_module";

const pinia = createPinia();
export {
  pinia,
  useAnswersModule,
  useAuditModule,
  useAuthModule,
  useCoursesModule,
  useDashboardModule,
  useResultsModule,
  useSchoolsModule,
  useSectionsModule,
  useStudentsModule,
};
