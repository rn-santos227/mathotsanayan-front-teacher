<template>
  <v-dialog v-model="dialog">
    <v-sheet
      class="ma-auto"
      elevation="12"
      max-width="550"
      rounded="lg"
      width="100%"
      height="400px"
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
      <v-card height="300px" elevation="0">
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="purple-darken-3"
            width="16"
            size="160"
            indeterminate
          >
            Loading
          </v-progress-circular>
        </div>
      </v-card>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  activate: {
    type: Boolean,
    required: true,
  },
});
const dialog = ref<boolean>(false);

watch(
  () => props.activate,
  (activate: boolean) => {
    dialog.value = activate;
  }
);
</script>
