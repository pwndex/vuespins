<template>
  <div class="lds-ring" :style="cssVars">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Ring',
  props: {
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: String,
      default: '50',
    },
    thickness: {
      type: String,
      default: '6',
    },
  },
  computed: {
    cssVars() {
      return {
        '--vcs-ring-color': this.color,
        '--vcs-ring-size': this.size + 'px',
        '--vcs-ring-thickness': this.thickness + 'px',
      }
    },
  },
}
</script>

<style scoped>
.lds-ring {
  position: relative;
  width: var(--vcs-ring-size);
  height: var(--vcs-ring-size);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: var(--vcs-ring-thickness) solid var(--vcs-ring-color);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--vcs-ring-color) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>