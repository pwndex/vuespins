<template>
  <div id="app">
    <Ring color="#ffffff" size="50" thickness="3" speed="2" />
    <CubeGrid color="#ffffff" size="50" />
    <Spinner color="#ffffff" size="50" speed="2" />
    <Square color="#ffffff" size="50" speed="2" />
    <Chase color="#ffffff" size="50" speed="2" />
    <Pulse color="#ffffff" size="50" speed="2" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #000000;
  height: 100vh;
}

#app {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 500px;
}
</style>
