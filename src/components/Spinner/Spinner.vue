<template>
  <div class="vs-spinner" :style="cssVars">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
</template>

<script>
export default {
  name: 'vs-spinner',
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
      default: 2
    }
  },
  computed: {
    cssVars() {
      return {
        '--vs-spinner-size': this.size + 'px',
        '--vs-spinner-color': this.color,
        '--vs-spinner-speed': this.speed + 's',
        '--vs-spinner-delay': -this.speed / 2 + 's'
      }
    }
  }
}
</script>

<style scoped>
.vs-spinner {
  width: var(--vs-spinner-size);
  height: var(--vs-spinner-size);
  position: relative;
  -webkit-animation: vs-rotate var(--vs-spinner-speed) infinite linear;
  animation: vs-rotate var(--vs-spinner-speed) infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: var(--vs-spinner-color);
  border-radius: 100%;
  -webkit-animation: vs-bounce var(--vs-spinner-speed) infinite ease-in-out;
  animation: vs-bounce var(--vs-spinner-speed) infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: var(--vs-spinner-delay);
  animation-delay: var(--vs-spinner-delay);
}

@-webkit-keyframes vs-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes vs-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
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
