<template>
  <v-container class="fill-height" fluid>
    <v-card elevation="8" width="35%" class="ma-auto">
      <v-card class="rounded-0 rounded-t mb-6" color="purple-darken-3">
        <v-card-text>
          <span class="text-subtitle-1 font-weight-bold">
            MatHOTSanayan Teacher Login
          </span>
        </v-card-text>
      </v-card>
      <form>
        <v-card-text>
          <v-text-field
            class="mx-4"
            v-model.trim="v$.email.$model"
            autocomplete="email"
            prepend-inner-icon="mdi-email"
            label="Email"
            density="compact"
            variant="outlined"
            :error="v$.email.$error"
            :error-messages="errors.email"
          />
          <v-text-field
            class="mx-4 mt-4"
            v-model.trim="v$.password.$model"
            autocomplete="new-password"
            prepend-inner-icon="mdi-lock"
            label="Password"
            density="compact"
            variant="outlined"
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :error="v$.password.$error"
            :error-messages="errors.password"
            @click:append-inner="show = !show"
          />
        </v-card-text>
        <v-divider class="mb-2"></v-divider>
        <v-card-actions class="text-right">
          <v-btn
            @click.prevent="submitForm"
            block
            variant="elevated"
            dark
            color="purple-darken-3"
          >
            Login
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
  <ErrorDialogComponent ref="error" />
  <InformationDialogComponent ref="info" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useAuthModule } from "@/store";
import { useRouter } from "vue-router";

import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import InformationDialogComponent from "@/components/dialogs/InformationDialogComponent.vue";
import Login from "@/interfaces/Login";
import rules from "@/helpers/rules/rules_login";

const authModule = useAuthModule();
const router = useRouter();

const error = ref({
  show: (message: string) => {
    return message;
  },
});

const info = ref({
  show: (message: string) => {
    return message;
  },
});

const show = ref<boolean>(false);
const state = reactive<Login>({
  email: "",
  password: "",
});

const errors = computed(() => useValidationErrors<Login>(v$.value.$errors));
const v$ = useVuelidate(rules, state);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    try {
      await authModule.login(v$.value.email.$model, v$.value.password.$model);
      if (authModule.isAuthenticated) {
        router.push("/");
      } else {
        info.value.show(
          "Bad Credentials, please check your email and password."
        );
      }
    } catch (err) {
      error.value.show("The server has not able to process request.");
    }
  }
};
</script>
