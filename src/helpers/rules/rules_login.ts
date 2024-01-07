import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    email: { required, email, maxLength: maxLength(50) },
    password: { required, minLength: minLength(6) },
  };
});

export default rules;
