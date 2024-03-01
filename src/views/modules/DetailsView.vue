<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-magnify"></v-icon> Details
    </v-list-item-title>
    <v-dialog
      class="ma-auto hide-scroll"
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
            <span class="text-h5">
              Module ID: {{ padLeft(state.id) }} Details
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
              <v-col cols="9">
                <v-text-field
                  v-model.trim="state.name"
                  label="Module Title"
                  density="compact"
                  variant="outlined"
                  readonly
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.trim="state.step"
                  label="Module Stage"
                  density="compact"
                  variant="outlined"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-slider
                  label="Passing Rate:"
                  color="purple-darken-3"
                  :thumb-size="32"
                  v-model="state.passing"
                  thumb-label
                  readonly
                ></v-slider>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model.trim="subject"
                  prepend-inner-icon="mdi-book"
                  label="Subject"
                  density="compact"
                  variant="outlined"
                  item-title="name"
                  item-value="id"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  rows="3"
                  v-model.trim="state.description"
                  label="Description/Notes"
                  density="compact"
                  variant="outlined"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  rows="3"
                  v-model.trim="state.objective"
                  label="Objective"
                  density="compact"
                  variant="outlined"
                  readonly
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  rows="3"
                  v-model.trim="state.direction"
                  label="Direction/Instruction"
                  density="compact"
                  variant="outlined"
                  readonly
                />
              </v-col>
            </v-row>
          </v-card-text>
        </form>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { getSubjectName } from "@/helpers/instance";
import { padLeft } from "@/helpers/utils";

import Module from "@/types/Module";

const dialog = ref<boolean>(false);

const props = defineProps<{
  module: Module;
}>();

const state = reactive<Module>({ ...props.module });
const subject = ref<string>(getSubjectName(state.subject));

const close = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped>
.active {
  margin-top: -10px;
}
</style>
