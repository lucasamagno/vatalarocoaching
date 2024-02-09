<template>
  <div class="grid-container">
    <div class="box" v-for="box in boxes" :key="box.id">
      <h2>{{ box.header }}</h2>
      <p>{{ box.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const boxes = ref([
  { id: 1, header: 'Header 1', text: 'Content...' },
  { id: 2, header: 'Header 2', text: 'Content...' },
  { id: 3, header: 'Header 3', text: 'Content...' },
  { id: 4, header: 'Header 4', text: 'Content...' },
  { id: 5, header: 'Header 5', text: 'Content...' },
  { id: 6, header: 'Header 6', text: 'Content...' },
  { id: 7, header: 'Header 7', text: 'Content...' },
  { id: 8, header: 'Header 8', text: 'Content...' },
  { id: 9, header: 'Header 9', text: 'Content...' },
  { id: 10, header: 'Header 10', text: 'Content...' },
]);
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 boxes per row */
  grid-template-rows: repeat(2, 1fr); /* 2 rows */
  gap: 0; /* No space between boxes */
  width: 100%; /* Full width of the container */
  height: auto; /* Height adjusts to content */
}

.box {
  border: 2px solid orange;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
  align-items: center; /* Centers content horizontally */
  text-align: center; /* Centers text */
}

.box h2,
.box p {
  margin: 0;
}

/* Making boxes longer horizontally and shorter vertically */
@media (min-width: 768px) {
  .grid-container {
    grid-auto-rows: minmax(100px, auto); /* Shorter height for larger screens */
  }
}
</style>
