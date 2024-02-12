<template>
  <v-card-text>
    <div v-if="focusPage === 'student-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Teacher Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>
    </div>

    <div v-if="focusPage === 'student-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Teacher Filter Search
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'student-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Teacher Create
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'student-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Teacher Update
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'student-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Teacher Deletion
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_students";

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
