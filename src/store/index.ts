import { createPinia } from "pinia";
import { useAuthModule } from "./modules/auth_module";
import { useStudentsModule } from "./modules/students_module";

const pinia = createPinia();
export { pinia, useAuthModule, useStudentsModule };
