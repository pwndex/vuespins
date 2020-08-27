<template>
  <div id="app">
    <Ring />
    <CubeGrid />
  </div>
</template>

<script>
import Vue from 'vue'
import { Ring, CubeGrid } from '@/index'

export default Vue.extend({
  name: 'App',
  components: {
    Ring,
    CubeGrid,
  },
})
</script>
