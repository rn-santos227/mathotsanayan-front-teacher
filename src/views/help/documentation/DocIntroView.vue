<template>
  <v-card-text>
    <span class="text-h5 font-weight-bold"> About MatHotSanayan Teacher </span>
    <v-divider class="my-2" />
    <p class="ma-6">
      {{ docs[0] }}
    </p>

    <span class="ma-6">
      The name "MatHOTSanayan" is derived from the fusion of three key elements:
    </span>

    <ol class="mx-10 my-4">
      <li class="my-2">
        <p>
          <b>Mathematics:</b>
          <span> {{ docs[1] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Higher Order Thinking Skills:</b>
          <span> {{ docs[2] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Sanayan:</b>
          <span> {{ docs[3] }}</span>
        </p>
      </li>
    </ol>

    <span class="mx-6 my-2 font-weight-bold"> Mission: </span>
    <p class="mx-6 my-2">
      {{ docs[4] }}
    </p>
  </v-card-text>
</template>

<script setup lang="ts">
import docs from "@/helpers/documentation/doc_introduction";
</script>
