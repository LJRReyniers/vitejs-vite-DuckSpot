<script setup lang="ts">
(function () {
  let POI1ViewCount = parseInt(localStorage.getItem('POI1ViewCount')) || 0;

  POI1ViewCount++;
  localStorage.setItem('POI1ViewCount', POI1ViewCount.toString());

  console.log('POI1ViewCount =', POI1ViewCount);
})();
function buttonCount() {
  let POI1ButtonCount = parseInt(localStorage.getItem('POI1ButtonCount')) || 0;

  POI1ButtonCount++;
  localStorage.setItem('POI1ButtonCount', POI1ButtonCount.toString());

  console.log('POI1ButtonCount =', POI1ButtonCount);
}
</script>

<template>
  <div>
    <h2>The coffee machine</h2>
    <p>-</p>
    <p>
      This coffee machine can be used by everyone and uses fresh coffee beans,
      which means it puts normal vending machine coffee to shame.
    </p>
    <p>
      Fontys workers can get free coffee here, but students need to pay full
      price.
    </p>
    <p>-</p>
    <p>Just put your Fontys card on the card-reader and select your options.</p>
    <p>
      In the drawer below, you can find teabags and chocolate powder packets.
    </p>
  </div>

  <div>
    <button @click="buttonCount()">More info</button>
  </div>
</template>

<style scoped>
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
