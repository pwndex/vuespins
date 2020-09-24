<template>
  <div>
    <Pulse color="#fb503b" size="80" speed="5" />
  </div>
</template>

<script>
import { Pulse } from 'vuespins'

export default {
  name: 'app',
  components: { Pulse }
}
</script>
