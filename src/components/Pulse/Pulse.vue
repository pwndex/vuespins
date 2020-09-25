<template>
  <div class="vs-pulse" :style="cssVars">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>

<script>
export default {
  name: 'vs-pulse',
  props: {
    color: {
      type: String,
      default: '#282c34'
    },
    size: {
      type: Number,
      default: 50
    },
    speed: {
      type: Number,
      default: 2.5
    }
  },
  computed: {
    cssVars() {
      return {
        '--vs-pulse-size': this.size + 'px',
        '--vs-pulse-color': this.color,
        '--vs-pulse-speed': this.speed + 's',
        '--vs-pulse-delay': -this.speed + 1 + 's'
      }
    }
  }
}
</script>

<style scoped>
.vs-pulse {
  width: var(--vs-pulse-size);
  height: var(--vs-pulse-size);
  position: relative;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--vs-pulse-color);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: vs-bounce var(--vs-pulse-speed) infinite ease-in-out;
  animation: vs-bounce var(--vs-pulse-speed) infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: var(--vs-pulse-delay);
  animation-delay: var(--vs-pulse-delay);
}

@-webkit-keyframes vs-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes vs-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
