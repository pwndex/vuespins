<template>
  <div class="vs-chase" :style="cssVars">
    <div class="vs-chase-dot"></div>
    <div class="vs-chase-dot"></div>
    <div class="vs-chase-dot"></div>
    <div class="vs-chase-dot"></div>
    <div class="vs-chase-dot"></div>
    <div class="vs-chase-dot"></div>
  </div>
</template>

<script>
export default {
  name: 'vs-chase',
  props: {
    color: {
      type: String,
      default: '#282c34'
    },
    size: {
      type: String,
      default: '50'
    },
    speed: {
      type: String,
      default: '2.5'
    }
  },
  computed: {
    cssVars() {
      return {
        '--vs-chase-size': this.size + 'px',
        '--vs-chase-color': this.color,
        '--vs-chase-speed': this.speed + 's',
        '--vs-chase-delay': this.speed - 0.5 + 's',
        '--vs-chase-delay-1': this.speed - 3.6 + 's',
        '--vs-chase-delay-2': this.speed - 3.5 + 's',
        '--vs-chase-delay-3': this.speed - 3.4 + 's',
        '--vs-chase-delay-4': this.speed - 3.3 + 's',
        '--vs-chase-delay-5': this.speed - 3.2 + 's',
        '--vs-chase-delay-6': this.speed - 3.1 + 's'
      }
    }
  }
}
</script>

<style scoped>
.vs-chase {
  width: var(--vs-chase-size);
  height: var(--vs-chase-size);
  position: relative;
  animation: vs-chase var(--vs-chase-speed) infinite linear both;
  -webkit-animation: vs-chase var(--vs-chase-speed) infinite linear both;
}

.vs-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: vs-chase-dot var(--vs-chase-delay) infinite ease-in-out both;
  -webkit-animation: vs-chase-dot var(--vs-chase-delay) infinite ease-in-out
    both;
}

.vs-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: var(--vs-chase-color);
  border-radius: 100%;
  animation: vs-chase-dot-before var(--vs-chase-delay) infinite ease-in-out both;
}

.vs-chase-dot:nth-child(1) {
  animation-delay: var(--vs-chase-delay-1);
}
.vs-chase-dot:nth-child(2) {
  animation-delay: var(--vs-chase-delay-2);
}
.vs-chase-dot:nth-child(3) {
  animation-delay: var(--vs-chase-delay-3);
}
.vs-chase-dot:nth-child(4) {
  animation-delay: var(--vs-chase-delay-4);
}
.vs-chase-dot:nth-child(5) {
  animation-delay: var(--vs-chase-delay-5);
}
.vs-chase-dot:nth-child(6) {
  animation-delay: var(--vs-chase-delay-6);
}
.vs-chase-dot:nth-child(1):before {
  animation-delay: var(--vs-chase-delay-1);
}
.vs-chase-dot:nth-child(2):before {
  animation-delay: var(--vs-chase-delay-2);
}
.vs-chase-dot:nth-child(3):before {
  animation-delay: var(--vs-chase-delay-3);
}
.vs-chase-dot:nth-child(4):before {
  animation-delay: var(--vs-chase-delay-4);
}
.vs-chase-dot:nth-child(5):before {
  animation-delay: var(--vs-chase-delay-5);
}
.vs-chase-dot:nth-child(6):before {
  animation-delay: var(--vs-chase-delay-6);
}

@keyframes vs-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes vs-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes vs-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
