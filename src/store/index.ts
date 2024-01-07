import { createPinia } from "pinia";
import { useAuthModule } from "./modules/auth_module";

const pinia = createPinia();
export { pinia, useAuthModule };
