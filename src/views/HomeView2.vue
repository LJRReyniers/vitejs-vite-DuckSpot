<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';

(function () {
  let HomeViewCount = parseInt(localStorage.getItem('HomeViewCount') || '0');

  HomeViewCount++;
  localStorage.setItem('HomeViewCount', HomeViewCount.toString());

  console.log('HomeViewCount =', HomeViewCount);
})();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<style>
body {
  background-color: #2c3e50;
  color: seashell;
}
</style>
