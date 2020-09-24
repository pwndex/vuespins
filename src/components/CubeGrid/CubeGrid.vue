<template>
  <div class="vs-cube-grid" :style="cssVars">
    <div class="vs-cube vs-cube1"></div>
    <div class="vs-cube vs-cube2"></div>
    <div class="vs-cube vs-cube3"></div>
    <div class="vs-cube vs-cube4"></div>
    <div class="vs-cube vs-cube5"></div>
    <div class="vs-cube vs-cube6"></div>
    <div class="vs-cube vs-cube7"></div>
    <div class="vs-cube vs-cube8"></div>
    <div class="vs-cube vs-cube9"></div>
  </div>
</template>

<script>
export default {
  name: 'vs-cube-grid',
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
      default: '1.3'
    }
  },
  computed: {
    cssVars() {
      return {
        '--vs-cube-grid-color': this.color,
        '--vs-cube-grid-size': this.size + 'px',
        '--vs-cube-grid-speed': this.speed + 's'
      }
    }
  }
}
</script>

<style scoped>
.vs-cube-grid {
  width: var(--vs-cube-grid-size);
  height: var(--vs-cube-grid-size);
  animation-duration: var(--vs-cube-grid-speed);
}

.vs-cube-grid .vs-cube {
  width: 33%;
  height: 33%;
  background-color: var(--vs-cube-grid-color);
  float: left;
  -webkit-animation: vs-cubeGridScaleDelay var(--vs-cube-grid-speed) infinite
    ease-in-out;
  animation: vs-cubeGridScaleDelay var(--vs-cube-grid-speed) infinite
    ease-in-out;
}
.vs-cube-grid .vs-cube1 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.vs-cube-grid .vs-cube2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.vs-cube-grid .vs-cube3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.vs-cube-grid .vs-cube4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.vs-cube-grid .vs-cube5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.vs-cube-grid .vs-cube6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.vs-cube-grid .vs-cube7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.vs-cube-grid .vs-cube8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.vs-cube-grid .vs-cube9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes vs-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes vs-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}
</style>
