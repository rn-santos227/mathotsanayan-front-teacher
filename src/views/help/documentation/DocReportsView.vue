<template>
  <v-card-text>
    <div v-if="focusPage === 'reports-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Reports Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_020.png')"
      />

      <p class="ma-6">
        {{ docs[1] }}
      </p>
    </div>

    <div v-if="focusPage === 'reports-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Result Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <p class="ma-6">
        {{ docs[3] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_023.png')"
      />
    </div>

    <div v-if="focusPage === 'reports-generate'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Result Generation
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[4] }}
      </p>

      <p class="ma-6">
        {{ docs[5] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_026.png')"
      />
    </div>

    <div v-if="focusPage === 'reports-details'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Result Details
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[6] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_021.png')"
      />

      <p class="ma-6">
        {{ docs[7] }}
      </p>

      <p class="ma-6">
        {{ docs[8] }}
      </p>

      <p class="ma-6">
        {{ docs[9] }}
      </p>
    </div>

    <div v-if="focusPage === 'reports-answers'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Answer List
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[10] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_022.png')"
      />

      <p class="ma-6">
        {{ docs[11] }}
      </p>

      <p class="ma-6">
        {{ docs[12] }}
      </p>
    </div>

    <div v-if="focusPage === 'reports-invalidate'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Result Invalidation
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_reports";

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
