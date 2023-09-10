<template>
  <div class="table-container">
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in records" :key="record.id">
        <td>{{ record.id }}</td>
        <td>{{ record.title }}</td>
        <td>{{ record.description }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Record {
  id: number;
  title: string;
  description: string;
}

export default defineComponent({
  props: {
    records: {
      type: Array as PropType<Record[]>,
      required: true,
    },
  },
});
</script>

<style scoped>

.table-container {
  height: 570px;
}

table {
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  border-bottom: 1px solid #ccc;
  margin-bottom: 12px;

  @media (max-width: 767px) {
   max-width: 100%;
  }
}

thead {
  font-weight: bold;
}

td {
  height: 35px;
  vertical-align: center;
}

th,
td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}

td:first-child {
  max-width: 100px;
}

th {
  background-color: #e8e3e3;
}
</style>
