<template>
  <v-btn
    density="comfortable"
    icon="mdi-help-circle-outline"
    size="x-large"
    @click="dialog = true"
  />

  <v-dialog class="ma-auto" width="70%" persistent v-model="dialog">
    <v-card>
      <v-card class="rounded-0 rounded-t py-2" color="purple-darken-3" flat>
        <v-card-actions class="mx-4">
          <span class="text-h6"
            ><v-icon icon="mdi-help-circle-outline" /> Help Library
          </span>
          <v-spacer />
          <v-btn
            density="comfortable"
            variant="outlined"
            icon="mdi-close"
            @click="close"
          >
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="d-flex justify-space-around flex-wrap">
        <v-row no-gutters>
          <v-col cols="3" class="flex-grow-0 question-height">
            <v-list density="compact">
              <template v-for="(doc, key_1) in docs" :key="key_1">
                <v-list-item
                  v-if="doc.subpages.length <= 0"
                  prepend-icon="mdi-book-multiple"
                  :title="doc.text"
                  @click="updatePage(doc.page)"
                />
                <v-list-group v-else :key="key_1">
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      prepend-icon="mdi-book-multiple"
                      v-bind="props"
                      :title="doc.text"
                    />
                  </template>
                  <v-list-item
                    v-for="(subpage, key_2) in doc.subpages"
                    :key="key_2"
                    :title="subpage.text"
                    @click="updatePage(subpage.page)"
                  />
                </v-list-group>
              </template>
            </v-list>
          </v-col>
          <v-divider vertical />
          <v-col class="flex-grow-1 question-height">
            <DocIntroView v-if="page === 'intro'" />
            <DocDashboardView v-else-if="page === 'dahsboard'" />
            <DocCoursesView
              v-else-if="page.includes('courses')"
              v-bind:page="page"
            />
            <DocSchoolsView
              v-else-if="page.includes('schools')"
              v-bind:page="page"
            />
            <DocSectionsView
              v-else-if="page.includes('sections')"
              v-bind:page="page"
            />
            <DocStudentsVue
              v-else-if="page.includes('students')"
              v-bind:page="page"
            />
            <DocReportsView
              v-else-if="page.includes('reports')"
              v-bind:page="page"
            />
            <DocAuditView
              v-else-if="page.includes('audit')"
              v-bind:page="page"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import docs from "@/helpers/docs";

import DocIntroView from "./documentation/DocIntroView.vue";
import DocDashboardView from "./documentation/DocDashboardView.vue";
import DocCoursesView from "./documentation/DocCoursesView.vue";
import DocSchoolsView from "./documentation/DocSchoolsView.vue";
import DocSectionsView from "./documentation/DocSectionsView.vue";
import DocStudentsVue from "./documentation/DocStudentsVue.vue";
import DocReportsView from "./documentation/DocReportsView.vue";
import DocAuditView from "./documentation/DocAuditView.vue";

const dialog = ref<boolean>(false);
const page = ref<string>("intro");

const close = () => {
  dialog.value = !dialog.value;
  page.value = "intro";
};

const updatePage = (newPage: string) => {
  page.value = newPage;
};
</script>

<style scoped>
.question-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
