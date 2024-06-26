<template>
    <div>
      <h1>Point of Interest</h1>
      <p>ID: {{ id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
  };
  </script>