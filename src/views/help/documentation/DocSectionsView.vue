<template>
  <v-card-text>
    <div v-if="focusPage === 'section-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Section Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>
    </div>

    <div v-if="focusPage === 'section-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Section Create
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'section-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Section Update
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'section-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Section Deletion
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_sections";

const props = defineProps<{
  page: string;
}>();

const focusPage = ref(props.page);

watch(
  () => props.page,
  (newValue) => {
    focusPage.value = newValue;
  }
);
</script>
