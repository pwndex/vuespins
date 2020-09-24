<template>
  <div class="vs-ring" :style="cssVars">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'vs-ring',
  props: {
    color: {
      type: String,
      default: '#282c34'
    },
    size: {
      type: String,
      default: '50'
    },
    thickness: {
      type: String,
      default: '6'
    },
    speed: {
      type: String,
      default: '1.2'
    }
  },
  computed: {
    cssVars() {
      return {
        '--vs-ring-color': this.color,
        '--vs-ring-size': this.size + 'px',
        '--vs-ring-thickness': this.thickness + 'px',
        '--vs-ring-speed': this.speed + 's'
      }
    }
  }
}
</script>

<style scoped>
.vs-ring {
  position: relative;
  width: var(--vs-ring-size);
  height: var(--vs-ring-size);
  animation-duration: var(--vs-ring-speed);
}
.vs-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: var(--vs-ring-thickness) solid var(--vs-ring-color);
  border-radius: 50%;
  -webkit-animation: vs-ring var(--vs-ring-speed) cubic-bezier(0.5, 0, 0.5, 1)
    infinite;
  animation: vs-ring var(--vs-ring-speed) cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--vs-ring-color) transparent transparent transparent;
}
.vs-ring div:nth-child(1) {
  -webkit-animation-delay: -0.45s;
  animation-delay: -0.45s;
}
.vs-ring div:nth-child(2) {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.vs-ring div:nth-child(3) {
  -webkit-animation-delay: -0.15s;
  animation-delay: -0.15s;
}
@keyframes vs-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
