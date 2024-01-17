<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-update"></v-icon> Update
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6">
              Update School ID: {{ padLeft(state.id) }}
            </span>
            <v-spacer />
            <v-btn
              density="comfortable"
              variant="outlined"
              icon="mdi-close"
              @click="close"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
        <form>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  v-model.trim="v$.name.$model"
                  label="School Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.name.$error"
                  :error-messages="errors.name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model.trim="v$.email.$model"
                  label="School Email (Optional)"
                  density="compact"
                  variant="outlined"
                  :error="v$.email.$error"
                  :error-messages="errors.email"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model.trim="state.contact_number"
                  label="School Contact Number (Optional)"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model.trim="state.address"
                  label="School Address (Optional)"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  rows="3"
                  v-model.trim="state.description"
                  label="School Description/Notes (Optional)"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mb-2 mt-auto" />
          <v-card-actions class="text-right">
            <v-spacer />
            <v-btn
              @click.prevent="resetForm"
              variant="elevated"
              width="200"
              dark
              color="error"
              prepend-icon="mdi-close"
            >
              Clear
            </v-btn>
            <v-btn
              @click.prevent="submitForm"
              variant="elevated"
              width="200"
              dark
              color="success"
              prepend-icon="mdi-check"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { inject, ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useSchoolsModule } from "@/store";

import School from "@/types/School";
import VSchool from "@/helpers/validations/v_schools";
import rules from "@/helpers/rules/rules_schools";
import { padLeft } from "@/helpers/utils";

const dialog = ref<boolean>(false);
const success = inject("success", {
  value: {
    show: (message: string) => {
      return message;
    },
  },
});

const error = inject("error", {
  value: {
    show: (message: string) => {
      return message;
    },
  },
});

const props = defineProps<{
  school: School;
}>();

const state = reactive<School>({ ...props.school });

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VSchool>(v$.value.$errors));

const resetForm = () => {
  state.name = props.school.name;
  state.email = props.school.email;
  state.address = props.school.address;
  state.contact_number = props.school.contact_number;
  state.description = props.school.description;
  v$.value.$reset();
};

const close = () => {
  dialog.value = false;
  resetForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const response = await useSchoolsModule().update(state);
  if (response) {
    resetForm();
    success.value.show("School has been successfully updated.");
    dialog.value = false;
  } else {
    error.value.show("The server has not able to process request.");
  }
};
</script>
