<template>
  <div>
    <CubeGrid color="#fb503b" :size="80" :speed="5" />
  </div>
</template>

<script>
import { CubeGrid } from 'vuespins'

export default {
  name: 'app',
  components: { CubeGrid }
}
</script>
