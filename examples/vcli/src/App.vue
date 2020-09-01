<template>
  <div id="app">
    <Ring color="#333" size="50" thickness="3" />
    <CubeGrid color="#333" size="50" />
    <Spinner color="#333" size="50" />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 200px;
}
</style>
