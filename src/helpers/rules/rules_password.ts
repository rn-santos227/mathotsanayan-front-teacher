import { required, maxLength, minLength, sameAs } from "@vuelidate/validators";
import { computed, ref } from "vue";

const rules_password = ref("");
const rules = computed(() => {
  return {
    current_password: {
      required,
      maxLength: maxLength(50),
      minLength: minLength(6),
    },
    password: {
      required,
      maxLength: maxLength(50),
      minLength: minLength(6),
    },
    password_confirm: {
      sameAsPassword: sameAs(rules_password),
    },
  };
});

export { rules, rules_password };
