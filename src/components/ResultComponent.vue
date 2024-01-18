<template>
  <v-card
    variant="outlined"
    :color="props.color"
    class="card-border pa-3 rounded-lg"
  >
    <v-alert-title class="font-weight-bold">{{ title }}:</v-alert-title>
    <v-card-text>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          :model-value="props.value"
          width="20"
          size="170"
          :color="props.color"
        >
          <span class="data">{{ props.data }}</span>
        </v-progress-circular>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string;
  title: string;
  data: string;
  value: number;
}>();
</script>

<style scoped>
.data {
  font-size: 26px;
  font-weight: bolder;
}

.card-border {
  border-width: 3px;
}
</style>
