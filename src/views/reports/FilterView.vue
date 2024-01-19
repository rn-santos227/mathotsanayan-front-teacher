<template>
  <v-btn
    variant="outlined"
    color="purple-darken-3"
    prepend-icon="mdi-magnify"
    height="40"
    width="180"
  >
    Filter Search
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="40%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Result Advance Search </span>
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
              <v-col cols="8">
                <v-text-field
                  v-model.trim="v$.search.$model"
                  label="Search Value"
                  density="compact"
                  variant="outlined"
                  :error="v$.search.$error"
                  :error-messages="errors.search"
                />
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="search_list"
                  item-title="text"
                  item-value="value"
                  v-model.trim="v$.category.$model"
                  label="Search Category"
                  density="compact"
                  variant="outlined"
                  :error="v$.category.$error"
                  :error-messages="errors.category"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />
          <v-card-actions class="text-right">
            <v-spacer />
            <v-btn
              @click.prevent="submit"
              variant="elevated"
              width="200"
              dark
              color="purple-darken-3"
              prepend-icon="mdi-magnify"
            >
              Search
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-btn>
  <ErrorDialogComponent ref="error" />
</template>

<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useResultsModule } from "@/store";

import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";

import Search from "@/interfaces/Search";
import VSearch from "@/helpers/validations/v_search";
import rules from "@/helpers/rules/rules_search";
import search_list from "@/helpers/searches/search_results";

const dialog = ref<boolean>(false);

const error = ref({
  show: (message: string) => {
    return message;
  },
});

const state = reactive<Search>({
  search: "",
  category: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VSearch>(v$.value.$errors));

const close = () => {
  dialog.value = !dialog.value;
};

const submit = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const response = await useResultsModule().search(state);
  if (response) {
    close();
  } else {
    error.value.show("The server has not able to process request.");
  }
};
</script>
