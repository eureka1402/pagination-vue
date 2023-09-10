<template>
  <div class="button-container">
    <button class="pagination-button" @click="goToPage(1)" :class="{ 'is-active': currentPage === 1 }">&lt;&lt;</button>
    <button
      class="pagination-button"
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
      :class="{ 'is-active': page === currentPage }"
    >
      {{ page }}
    </button>
    <button class="pagination-button" @click="goToPage(totalPages)" :class="{ 'is-active': currentPage === totalPages }">&gt;&gt;</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    totalPages: { type: Number, required: true },
    currentPage: { type: Number, required: true },
  },
  setup(props, { emit }) {
    const visiblePages = computed(() => {
      let startPage = Math.max(1, props.currentPage - 1);
      let endPage = Math.min(props.totalPages, props.currentPage + 1);

      // Здесь учитывается, чтобы всегда было 3 страницы
      if (props.currentPage === 1) {
        endPage = Math.min(props.totalPages, startPage + 2);
      } else if (props.currentPage === props.totalPages) {
        startPage = Math.max(1, endPage - 2);
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    });

    const goToPage = (page: number) => {
      if (page !== props.currentPage) {
        emit('change-page', page);
      }
    };

    return {
      visiblePages,
      goToPage,
    };
  },
});
</script>
<style scoped>
.button-container {
  display: flex;
  gap: 16px;

  @media (max-width: 767px) {
   justify-content: center;
  }
}
.pagination-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 8px;
  transition: background-color 0.3s ease;
}
.pagination-button:hover {
  background-color: #f2f2f2;
}
.pagination-button:focus {
  outline: none;
}
.pagination-button.is-active {
  font-weight: bold;
  pointer-events: none;
}
</style>
