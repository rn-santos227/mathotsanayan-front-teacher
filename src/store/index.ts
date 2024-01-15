import { createPinia } from "pinia";
import { useCoursesModule } from "./modules/courses_module";
import { useAuthModule } from "./modules/auth_module";
import { useDashboardModule } from "./modules/dashboard_module";
import { useSchoolsModule } from "./modules/schools_module";
import { useSectionsModule } from "./modules/sections_module";
import { useStudentsModule } from "./modules/students_module";

const pinia = createPinia();
export {
  pinia,
  useAuthModule,
  useCoursesModule,
  useDashboardModule,
  useSchoolsModule,
  useSectionsModule,
  useStudentsModule,
};
