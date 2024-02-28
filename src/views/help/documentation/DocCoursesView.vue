<template>
  <v-card-text>
    <div v-if="focusPage === 'courses-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Courses Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_005.png')"
      />
    </div>

    <div v-if="focusPage === 'courses-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Courses Create
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[1] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_006.png')"
      />
    </div>

    <div v-if="focusPage === 'courses-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Courses Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_007.png')"
      />
    </div>

    <div v-if="focusPage === 'courses-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Courses Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[3] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_008.png')"
      />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_courses";

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
