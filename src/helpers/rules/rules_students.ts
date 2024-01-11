import {
  required,
  email,
  maxLength,
  minLength,
  sameAs,
} from "@vuelidate/validators";
import { computed, ref } from "vue";

const rules_password = ref("");
const rules = computed(() => {
  return {
    first_name: {
      required,
      maxLength: maxLength(50),
    },
    middle_name: { maxLength: maxLength(50) },
    last_name: {
      required,
      maxLength: maxLength(50),
    },
    suffix: { maxLength: maxLength(5) },
    student_number: {
      required,
      maxLength: maxLength(50),
    },
    contact_number: {
      maxLength: maxLength(50),
    },
    email: {
      required,
      email,
      maxLength: maxLength(100),
    },
    password: {
      required,
      maxLength: maxLength(50),
      minLength: minLength(6),
    },
    password_confirm: {
      sameAsPassword: sameAs(rules_password),
    },
    course: {
      required,
    },
    school: {
      required,
    },
    section: {
      required,
    },
  };
});

export { rules, rules_password };
