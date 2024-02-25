<template>
  <v-dialog v-model="dialog" persistent>
    <v-sheet
      class="ma-auto text-center mx-auto"
      elevation="12"
      max-width="550"
      rounded="lg"
      width="100%"
    >
      <v-card class="rounded-0 rounded-t mb-2" color="error" variant="flat">
        <v-card-text class="text-left">
          <span class="text-subtitle-1 font-weight-bold">
            <v-icon class="mr-2" icon="mdi-information-outline"></v-icon>
            System Message
          </span>
        </v-card-text>
      </v-card>
      <v-icon
        class="my-5"
        color="error"
        icon="mdi-close-circle"
        size="112"
      ></v-icon>
      <h2 class="text-h5 mb-6 text-red-darken-4">THE ANSWER IS WRONG</h2>
      <div class="mx-6">
        <span>
          {{ text }}
        </span>
      </div>
      <v-divider class="mb-2 mt-6" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" width="100" color="error" dark @click="confirm">
          Okay
        </v-btn>
      </v-card-actions>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import Correct from "@/types/Correct";
import { ref } from "vue";

const dialog = ref<boolean>(false);
const text = ref<string>("");

const emit = defineEmits(["confirm"]);

const confirm = () => {
  dialog.value = false;
  emit("confirm");
};

const show = (correct: Correct) => {
  text.value = correct.solution;
  dialog.value = true;
};

defineExpose({
  show,
});
</script>
