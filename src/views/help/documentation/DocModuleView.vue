<template>
  <v-card-text>
    <div v-if="focusPage === 'modules-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Modules Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_002.png')"
      />

      <p class="ma-6">
        {{ docs[1] }}
      </p>

      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <p class="ma-6">
        {{ docs[3] }}
      </p>
    </div>

    <div v-if="focusPage === 'modules-details'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Modules Details
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'modules-questions'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Modules Questions List
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[4] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_003.png')"
      />

      <p class="ma-6">
        {{ docs[5] }}
      </p>

      <p class="ma-6">
        {{ docs[6] }}
      </p>

      <p class="ma-6">
        {{ docs[7] }}
      </p>

      <p class="ma-6">
        {{ docs[8] }}
      </p>
    </div>

    <div v-if="focusPage === 'modules-test'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Teacher Modules Question Test
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[9] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_004.png')"
      />

      <p class="ma-6">
        {{ docs[10] }}
      </p>

      <p class="ma-6">
        {{ docs[11] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_025.png')"
      />

      <p class="ma-6">
        {{ docs[12] }}
      </p>
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
