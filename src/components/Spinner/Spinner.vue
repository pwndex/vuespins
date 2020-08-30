<template>
  <div class="spinner" :style="cssVars">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: String,
      default: '50',
    },
  },
  computed: {
    cssVars() {
      return {
        '--vcs-spinner-size': this.size + 'px',
        '--vcs-spinner-color': this.color,
      }
    },
  },
}
</script>

<style scoped>
.spinner {
  width: var(--vcs-spinner-size);
  height: var(--vcs-spinner-size);
  position: relative;
  -webkit-animation: sk-rotate 2s infinite linear;
  animation: sk-rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: var(--vcs-spinner-color);
  border-radius: 100%;
  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
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