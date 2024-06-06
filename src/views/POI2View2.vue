<script setup lang="ts">
(function () {
  let POI2View2Count = parseInt(localStorage.getItem('POI2View2Count')) || 0;

  POI2View2Count++;
  localStorage.setItem('POI2View2Count', POI2View2Count.toString());

  console.log('POI2View2Count =', POI2View2Count);
})();
function buttonCount() {
  let POI2Button2Count =
    parseInt(localStorage.getItem('POI2Button2Count')) || 0;

  POI2Button2Count++;
  localStorage.setItem('POI2Button2Count', POI2Button2Count.toString());

  console.log('POI2Button2Count =', POI2Button2Count);
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

body {
  background-color: #2c3e50;
  color: seashell;
}
</style>
