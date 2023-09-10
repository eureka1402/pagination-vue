<template>
  <div>
    <RecordTable :records="currentRecords" />
    <Pagination :totalPages="totalPages" :currentPage="currentPage" @change-page="changePage"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import RecordTable from './components/RecordTable.vue';
import Pagination from './components/Pagination.vue';
import records from './components/records.json';

export default defineComponent({
  components: { RecordTable, Pagination },
  setup() {
    const currentPage = ref(1);
    const recordsPerPage = 10;

    const changePage = (page: number) => {
      currentPage.value = page;
    };

    const currentRecords = computed(() => {
      const start = (currentPage.value - 1) * recordsPerPage;
      const end = start + recordsPerPage;
      return records.slice(start, end);
    });

    const totalPages = computed(() => Math.ceil(records.length / recordsPerPage));

    return {
      currentPage, changePage, currentRecords, totalPages,
    };
  },
});
</script>
