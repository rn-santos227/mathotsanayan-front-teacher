<template>
  <v-list-item @click.prevent>
    <template v-slot:prepend>
      <v-icon icon="mdi-key"></v-icon>
    </template>
    <v-list-item-title>Change Password</v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="30%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Change Password </span>
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
                  prepend-inner-icon="mdi-lock"
                  v-model.trim="v$.current_password.$model"
                  autocomplete="new-password"
                  label="Current Password"
                  density="compact"
                  variant="outlined"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  :error="v$.password.$error"
                  :error-messages="errors.password"
                  @click:append-inner="show = !show"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  prepend-inner-icon="mdi-lock"
                  v-model.trim="v$.password.$model"
                  autocomplete="new-password"
                  label="Password"
                  density="compact"
                  variant="outlined"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  :error="v$.password.$error"
                  :error-messages="errors.password"
                  @click:append-inner="show = !show"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  prepend-inner-icon="mdi-lock"
                  v-model.trim="v$.password_confirm.$model"
                  autocomplete="new-password"
                  label="Contirm Password"
                  density="compact"
                  variant="outlined"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  :error="v$.password_confirm.$error"
                  :error-messages="errors.password_confirm"
                  @click:append-inner="show = !show"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />
          <v-card-actions class="text-right">
            <v-spacer />
            <v-btn
              @click.prevent="clearForm"
              variant="elevated"
              width="150"
              dark
              color="error"
              prepend-icon="mdi-close"
            >
              Clear
            </v-btn>
            <v-btn
              @click.prevent="submitForm"
              variant="elevated"
              width="150"
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
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useAuthModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, ref, reactive, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useAuthModule } from "@/store";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import Password from "@/interfaces/Password";
import VPassword from "@/helpers/validations/v_password";
import { rules, rules_password } from "@/helpers/rules/rules_password";

const show = ref<boolean>(false);
const dialog = ref<boolean>(false);
const success = ref({
  show: (message: string) => {
    return message;
  },
});
const error = ref({
  show: (message: string) => {
    return message;
  },
});

const state = reactive<Password>({
  current_password: "",
  password: "",
  password_confirm: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VPassword>(v$.value.$errors));

watch(
  () => state.password,
  (pword: string) => {
    rules_password.value = pword;
  }
);

const clearForm = () => {
  state.password = "";
  state.password_confirm = "";
  v$.value.$reset();
};

const close = () => {
  dialog.value = false;
  clearForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const response = await useAuthModule().changePassword(state);
  if (response) {
    clearForm();
    success.value.show("Password has been changed successfully.");
    dialog.value = false;
  } else {
    error.value.show("Invalid Credentials.");
  }
};
</script>
