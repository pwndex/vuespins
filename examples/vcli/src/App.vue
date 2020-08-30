<template>
  <div id="app">
    <ring color="#333" size="50" thickness="3" />
    <cube-grid color="#333" size="50" />
    <spinner color="#333" size="50" />
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
