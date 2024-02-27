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
          variant="flat"
        >
          <v-card-actions class="mx-4">
            <span class="text-h6">
              Update Student ID: {{ padLeft(state.id) }}
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
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.first_name.$model"
                  label="First Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.first_name.$error"
                  :error-messages="errors.first_name"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.middle_name.$model"
                  label="Middle Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.middle_name.$error"
                  :error-messages="errors.middle_name"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.last_name.$model"
                  label="Last Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.last_name.$error"
                  :error-messages="errors.last_name"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.suffix.$model"
                  label="Suffix"
                  density="compact"
                  variant="outlined"
                  :error="v$.suffix.$error"
                  :error-messages="errors.suffix"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  v-model.trim="v$.course.$model"
                  prepend-inner-icon="mdi-certificate"
                  label="Course"
                  density="compact"
                  variant="outlined"
                  item-title="name"
                  item-value="id"
                  :items="useCoursesModule().getCourses"
                  :error="v$.course.$error"
                  :error-messages="errors.course"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  v-model.trim="v$.school.$model"
                  prepend-inner-icon="mdi-school"
                  label="School"
                  density="compact"
                  variant="outlined"
                  item-title="name"
                  item-value="id"
                  :items="useSchoolsModule().getSchools"
                  :error="v$.school.$error"
                  :error-messages="errors.school"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  v-model.trim="v$.section.$model"
                  prepend-inner-icon="mdi-chair-school"
                  label="Section"
                  density="compact"
                  variant="outlined"
                  item-title="name"
                  item-value="id"
                  :items="useSectionsModule().getSections"
                  :error="v$.section.$error"
                  :error-messages="errors.section"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-text-field
                  v-model.trim="v$.email.$model"
                  autocomplete="email"
                  label="Email Address"
                  density="compact"
                  variant="outlined"
                  :error="v$.email.$error"
                  :error-messages="errors.email"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model.trim="v$.contact_number.$model"
                  label="Contact Number (Optional)"
                  density="compact"
                  variant="outlined"
                  :error="v$.contact_number.$error"
                  :error-messages="errors.contact_number"
                />
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model.trim="v$.student_number.$model"
                  label="Student Number"
                  density="compact"
                  variant="outlined"
                  :error="v$.student_number.$error"
                  :error-messages="errors.student_number"
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
              Reset
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
import {
  useStudentsModule,
  useCoursesModule,
  useSchoolsModule,
  useSectionsModule,
} from "@/store";
import { rules } from "@/helpers/rules/rules_update_student";
import { padLeft } from "@/helpers/utils";

import Student from "@/types/Student";
import VStudent from "@/helpers/validations/v_students";

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
  student: Student;
}>();
const state = reactive<Student>({ ...props.student });

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VStudent>(v$.value.$errors));

const resetForm = () => {
  state.first_name = props.student.first_name;
  state.middle_name = props.student.middle_name;
  state.last_name = props.student.last_name;
  state.suffix = props.student.suffix;
  state.email = props.student.email;
  state.student_number = props.student.student_number;
  state.contact_number = props.student.contact_number;
  state.course = props.student.course;
  state.school = props.student.school;
  state.section = props.student.section;
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
  resetForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const response = await useStudentsModule().update(state);
  if (response) {
    resetForm();
    success.value.show("Student has been successfully updated.");
    dialog.value = false;
  } else {
    error.value.show("The server has not able to process the request.");
  }
};
</script>
