<template>
  <v-card-text>
    <span class="text-h5 font-weight-bold">
      MatHOTSanayan Teacher Features
    </span>
    <v-divider class="my-2" />

    <ul class="mx-10 my-4">
      <li class="my-2">
        <p>
          <b>User-Friendly Interface:</b>
          <span>{{ docs[0] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Comprehensive Test Bank:</b>
          <span>{{ docs[1] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>HOTS-focused Approach:</b>
          <span>{{ docs[2] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Randomized Problems:</b>
          <span>{{ docs[3] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Interactive Practice Problems:</b>
          <span>{{ docs[4] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Instant Feedback:</b>
          <span>{{ docs[5] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Sample Solutions:</b>
          <span>{{ docs[6] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Triple Try Challenge:</b>
          <span>{{ docs[7] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Sequential Module Unlocking:</b>
          <span>{{ docs[8] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Progress Tracking:</b>
          <span>{{ docs[9] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Accessible Anytime, Anywhere:</b>
          <span>{{ docs[10] }}</span>
        </p>
      </li>
      <li class="my-2">
        <p>
          <b>Mobile Compatibility:</b>
          <span>{{ docs[11] }}</span>
        </p>
      </li>
    </ul>

    <span class="mx-6 my-2 font-weight-bold"> Get Started Today! </span>
    <p class="mx-6 my-2">
      {{ docs[11] }}
    </p>
  </v-card-text>
</template>

<script setup lang="ts">
import docs from "@/helpers/documentation/doc_features";
</script>
