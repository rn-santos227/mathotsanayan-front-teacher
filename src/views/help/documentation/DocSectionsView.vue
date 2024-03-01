<template>
  <v-card-text>
    <div v-if="focusPage === 'sections-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Sections Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_009.png')"
      />
    </div>

    <div v-if="focusPage === 'sections-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Sections Create
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[1] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_010.png')"
      />
    </div>

    <div v-if="focusPage === 'sections-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Sections Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[2] }}
      </p>
    </div>

    <div v-if="focusPage === 'sections-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Sections Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[3] }}
      </p>
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
