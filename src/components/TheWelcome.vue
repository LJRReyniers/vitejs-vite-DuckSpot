<script setup lang="ts">
import { ref } from 'vue';

// Define the images array outside of the script setup block
const images = [
  {
    id: 1,
    src: '/Images/Plattegrond4.1.drawio.webp',
    alt: 'Map 4.1',
  },
  {
    id: 2,
    src: '/Images/Plattegrond4.2.drawio.webp',
    alt: 'Map 4.2',
  },
];

let currentImageIndex = ref(0); // Track the index of the currently selected image

function switchImage(index: number) {
  currentImageIndex.value = index; // Set the current image index based on the button clicked
  const image = images[index]; // Get the image object based on the index
  //document.querySelector('img').src = image.src; // Update the img src directly
  const imgElement = document.querySelector('img');
        if (imgElement) {
            imgElement.src = image.src;
        } else {
            console.error('Image element not found.');
        }
}
</script>

<template>
  <div>
    <button @click="switchImage(0)">4.1</button>
    <button @click="switchImage(1)">4.2</button>
    <img
      :src="images[currentImageIndex].src"
      :alt="images[currentImageIndex].alt"
    />
  </div>
</template>
