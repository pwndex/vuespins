<template>
  <div class="vs-square" :style="cssVars"></div>
</template>

<script>
export default {
  name: 'vs-square',
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
        '--vs-square-size': this.size + 'px',
        '--vs-square-color': this.color,
        '--vs-square-speed': this.speed + 's'
      }
    }
  }
}
</script>

<style scoped>
.vs-square {
  width: var(--vs-square-size);
  height: var(--vs-square-size);
  background-color: var(--vs-square-color);
  -webkit-animation: vs-rotateplane var(--vs-square-speed) infinite ease-in-out;
  animation: vs-rotateplane var(--vs-square-speed) infinite ease-in-out;
}

@-webkit-keyframes vs-rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes vs-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
