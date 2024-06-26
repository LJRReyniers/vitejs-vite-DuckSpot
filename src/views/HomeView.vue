<script setup lang="ts">
import { defineProps, watchEffect } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToPage = (id) => {
  router.push({ name: `POI${id}` }); // Replace with your actual route name// Default route if no specific ID matches
};

// Define the "id" prop
const props = defineProps({
  id: String,
});

// Example usage of the "id" prop
console.log('Received ID:', props.id);

watchEffect(() => {
  if (props.id) {
    redirectToPage(props.id);
  }
});

// Increment HomeViewCount in localStorage
(function () {
  let HomeViewCount = parseInt(localStorage.getItem('HomeViewCount') || '0');

  HomeViewCount++;
  localStorage.setItem('HomeViewCount', HomeViewCount.toString());

  console.log('HomeViewCount =', HomeViewCount);
})();
</script>

<template>
  <main>
    <!-- Render something else (e.g., a custom message) if "id" prop exists -->
    <div v-if="id">
      <p>ID provided: {{ id }}</p>
    </div>

    <!-- Render TheWelcome component if "id" prop does not exist -->
    <TheWelcome v-else />
  </main>
</template>
