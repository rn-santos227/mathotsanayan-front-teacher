<template>
  <v-card-text>
    <div v-if="focusPage === 'students-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Students Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_013.png')"
      />
    </div>

    <div v-if="focusPage === 'students-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Students Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[1] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_019.png')"
      />
    </div>

    <div v-if="focusPage === 'students-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Students Create
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_014.png')"
      />
    </div>

    <div v-if="focusPage === 'students-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Students Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[3] }}
      </p>
    </div>

    <div v-if="focusPage === 'students-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Students Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[4] }}
      </p>
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
