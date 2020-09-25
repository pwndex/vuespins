<template>
  <div>
    <Ring color="#fb503b" :size="80" :thickness="1" :speed="3" />
  </div>
</template>

<script>
import { Ring } from 'vuespins'

export default {
  name: 'app',
  components: { Ring }
}
</script>
