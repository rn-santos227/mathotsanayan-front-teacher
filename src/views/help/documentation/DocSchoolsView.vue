<template>
  <v-card-text>
    <div v-if="focusPage === 'schools-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Schools Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>
    </div>

    <div v-if="focusPage === 'schools-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Schools Create
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'schools-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Schools Update
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'schools-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Schools Deletion
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_schools";

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
