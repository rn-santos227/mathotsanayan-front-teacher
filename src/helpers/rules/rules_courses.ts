import { required, maxLength } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    name: { required, maxLength: maxLength(200) },
    abbreviation: { required, maxLength: maxLength(10) },
  };
});

export default rules;
