<script>
(function () {
  let AboutViewCount = parseInt(localStorage.getItem('AboutViewCount')) || 0;

  AboutViewCount++;
  localStorage.setItem('AboutViewCount', AboutViewCount.toString());

  console.log('AboutViewCount =', AboutViewCount);
})();
</script>

<template>
  <div>
    <p>This website is to help students explore the TQ buiding.</p>
    <p>Every Duck on the map stands for 1 point of interest.</p>
    <p>Just go to the shown location and find the duck!</p>
    <p>
      After you find the ducks, scan it to learn more about the point of
      interest.
    </p>
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
