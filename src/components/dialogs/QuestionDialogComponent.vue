<template>
  <v-dialog v-model="dialog">
    <v-sheet
      class="ma-auto text-center mx-auto"
      elevation="12"
      max-width="550"
      rounded="lg"
      width="100%"
    >
      <v-card
        class="rounded-0 rounded-t mb-2"
        color="purple-darken-3"
        variant="flat"
      >
        <v-card-text class="text-left">
          <span class="text-subtitle-1 font-weight-bold">
            <v-icon class="mr-2" icon="mdi-information-outline"></v-icon>
            System Message
          </span>
        </v-card-text>
      </v-card>
      <v-icon
        class="my-5"
        color="purple-darken-3"
        icon="mdi-help-circle"
        size="112"
      ></v-icon>
      <h2 class="text-h4 mb-6 text-purple-darken-3">QUESTION</h2>
      <span class="mx-auto">
        {{ text }}
      </span>
      <v-divider class="mb-2 mt-6" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" width="100" color="error" dark @click="cancel">
          Cancel
        </v-btn>
        <v-btn variant="flat" width="100" color="success" dark @click="confirm">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<boolean>(false);
const text = ref<string>("");

const emit = defineEmits(["confirm", "cancel"]);

const confirm = () => {
  dialog.value = false;
  emit("confirm");
};

const cancel = () => {
  dialog.value = false;
  emit("cancel");
};

const show = (message: string) => {
  text.value = message;
  dialog.value = true;
};

defineExpose({
  show,
});
</script>
