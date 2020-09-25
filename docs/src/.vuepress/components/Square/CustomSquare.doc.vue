<template>
  <div>
    <Square color="#fb503b" :size="80" :speed="5" />
  </div>
</template>

<script>
import { Square } from 'vuespins'

export default {
  name: 'app',
  components: { Square }
}
</script>
