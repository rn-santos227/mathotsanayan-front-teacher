import { createPinia } from "pinia";
import { useAnswersModule } from "./modules/answers_module";
import { useAuditModule } from "./modules/audit_module";
import { useAuthModule } from "./modules/auth_module";
import { useCoursesModule } from "./modules/courses_module";
import { useDashboardModule } from "./modules/dashboard_module";
import { useModulesModule } from "./modules/modules_module";
import { useQuestionsModule } from "./modules/questions_module";
import { useResultsModule } from "./modules/results_module";
import { useSchoolsModule } from "./modules/schools_module";
import { useSectionsModule } from "./modules/sections_module";
import { useStudentsModule } from "./modules/students_module";
import { useTestModule } from "./modules/test_module";

const pinia = createPinia();
export {
  pinia,
  useAnswersModule,
  useAuditModule,
  useAuthModule,
  useCoursesModule,
  useDashboardModule,
  useModulesModule,
  useQuestionsModule,
  useResultsModule,
  useSchoolsModule,
  useSectionsModule,
  useStudentsModule,
  useTestModule,
};
