<template>
  <div>
    <Spinner color="#fb503b" :size="80" :speed="7" />
  </div>
</template>

<script>
import { Spinner } from 'vuespins'

export default {
  name: 'app',
  components: { Spinner }
}
</script>
