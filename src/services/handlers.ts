import type { ErrorObject } from "@vuelidate/core";

const useValidationErrors = <T extends Record<keyof T, string | number>>(
  errors: ErrorObject[]
): Record<keyof T, string> => {
  return errors.reduce((acc, value) => {
    return { ...acc, [value.$property]: value.$message };
  }, {} as Record<keyof T, string>);
};

export { useValidationErrors };
