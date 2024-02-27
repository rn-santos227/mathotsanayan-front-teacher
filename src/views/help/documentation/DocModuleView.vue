<template>
  <v-card-text>
    <div v-if="focusPage === 'students-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Modules Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>
    </div>

    <div v-if="focusPage === 'students-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Modules Questions List
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'students-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Modules Question Test
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_modules";

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
