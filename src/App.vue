<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
  import Home from "components/Home";

  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style>
  #app {
    width: 1024px;
    margin: 0 auto;
  }
</style>
