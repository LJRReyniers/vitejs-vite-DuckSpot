<script setup lang="ts">
import { ref } from 'vue';

// Initialize POI3ViewCount as a reactive reference
const POI3ViewCount = ref(parseInt(localStorage.getItem('POI3ViewCount') || '0'));

// Increment the view count
POI3ViewCount.value++;

// Update the local storage
localStorage.setItem('POI3ViewCount', POI3ViewCount.value.toString());

console.log('POI3ViewCount =', POI3ViewCount.value);

// Expose POI3ViewCount to the template
defineExpose({ POI3ViewCount });
</script>


<template>
  <div>
    <h2>Thank you for scanning!</h2>
    <p>You're the {{ POI3ViewCount }} visitor of this page.</p>
    <p>-</p>
    <h3>Claim your reward:</h3>
    <p>On Wednesdays, claim it at this table.</p>
    <p>On other days, claim it by screenshotting the page 
        and showing it at this table on Wednesdays.</p>
    <p>-</p>
    <p>To claim a reward, 
        simply show this page to someone at the correct location (stated above).</p>
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
</style>