import { required } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    search: { required },
    category: { required },
  };
});

export default rules;
