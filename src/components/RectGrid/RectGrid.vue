<template>
  <div class="vs-rect-grid" :style="cssVars">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>

<script>
export default {
  name: 'vs-rect-grid',
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
      default: '1.2'
    }
  },
  computed: {
    cssVars() {
      return {
        '--vs-rect-grid-size': this.size + 'px',
        '--vs-rect-grid-color': this.color,
        '--vs-rect-grid-speed': this.speed + 's',
        '--vs-rect-grid-delay-1': this.speed - 2.3 + 's',
        '--vs-rect-grid-delay-2': this.speed - 2.2 + 's',
        '--vs-rect-grid-delay-3': this.speed - 2.1 + 's',
        '--vs-rect-grid-delay-4': this.speed - 2 + 's',
        '--vs-rect-grid-delay-5': this.speed - 1.9 + 's'
      }
    }
  }
}
</script>

<style scoped>
.vs-rect-grid {
  width: var(--vs-rect-grid-size);
  height: var(--vs-rect-grid-size);
  text-align: center;
  font-size: 10px;
}

.vs-rect-grid > div {
  background-color: var(--vs-rect-grid-color);
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: vs-stretchdelay var(--vs-rect-grid-speed) infinite
    ease-in-out;
  animation: vs-stretchdelay var(--vs-rect-grid-speed) infinite ease-in-out;
}

.vs-rect-grid .rect1 {
  -webkit-animation-delay: var(--vs-rect-grid-delay-1);
  animation-delay: var(--vs-rect-grid-delay-1);
}

.vs-rect-grid .rect2 {
  -webkit-animation-delay: var(--vs-rect-grid-delay-2);
  animation-delay: var(--vs-rect-grid-delay-2);
}

.vs-rect-grid .rect3 {
  -webkit-animation-delay: var(--vs-rect-grid-delay-3);
  animation-delay: var(--vs-rect-grid-delay-3);
}

.vs-rect-grid .rect4 {
  -webkit-animation-delay: var(--vs-rect-grid-delay-4);
  animation-delay: var(--vs-rect-grid-delay-4);
}

.vs-rect-grid .rect5 {
  -webkit-animation-delay: var(--vs-rect-grid-delay-5);
  animation-delay: var(--vs-rect-grid-delay-5);
}

@-webkit-keyframes vs-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes vs-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
