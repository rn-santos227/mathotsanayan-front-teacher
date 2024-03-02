<template>
  <v-card-text>
    <div v-if="focusPage === 'audit-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Audit Trail Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_027.png')"
      />
    </div>

    <div v-if="focusPage === 'audit-details'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Audit Details
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[1] }}
      </p>

      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_028.png')"
      />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_audit";

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
