<script setup lang="ts">
(function () {
  let POI2ViewCount = parseInt(localStorage.getItem('POI2ViewCount')) || 0;

  POI2ViewCount++;
  localStorage.setItem('POI2ViewCount', POI2ViewCount.toString());

  console.log('POI2ViewCount =', POI2ViewCount);
})();
function buttonCount() {
  let POI2ButtonCount = parseInt(localStorage.getItem('POI2ButtonCount')) || 0;

  POI2ButtonCount++;
  localStorage.setItem('POI2ButtonCount', POI2ButtonCount.toString());

  console.log('POI2ButtonCount =', POI2ButtonCount);
}
</script>

<template>
  <div>
    <h2>Arcade games</h2>
    <p>-</p>
    <p>These arcade games are free to play for everyone!</p>
    <p>
      Just make sure you follow the rules and only use it during breaktime or
      when you won't disturb others.
    </p>
  </div>
  <div>
    <button @click="buttonCount()">More info</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
button {
  background-color: #00bff2;
  color: white;
  border: none;
}
</style>
