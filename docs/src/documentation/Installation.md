# Installation

## Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [Yarn Classic](https://classic.yarnpkg.com/en/)

## Quick Start

To install it, open up your terminal and run

```shell
npm install vuespins
# or yarn - whichever you prefer
yarn add vuespins
```

## Usage

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="/vuespins/dist/vuespins.min.js"></script>

<!-- CDN -->
<script src="https://unpkg.com/vuespins@latest/dist/vuespins.min.js"></script>
```

### Bandler (Webpack, Rollup)

```js
import Vue from 'vue'
import Vuespins from 'vuespins'

Vue.use(Vuespins)
```

### How to use it?

After above steps, simply use any spinners in your Vue components

```vue{4,7-11}
<template>
  <div>
    // Basic Ring Spinner
    <Ring />

    // Custom Ring Spinner
    <Ring
      color="custom-color"
      size="custom-size"
      thickness="custom-thickness"
    />
  </div>
</template>
```

Or you can import any spinner to your liking

```vue{4,7,11,13-16}
<template>
  <div>
    // Basic Ring Spinner
    <CubeGrid />

    // Custom Ring Spinner
    <CubeGrid color="custom-color" size="custom-size" />
  </div>
</template>
<script>
import { CubeGrid } from 'vuespins'

export default {
  name: 'app',
  components: { CubeGrid },
}
</script>
```

## Examples

You will find further demos under `/examples` folder

- [CDN](https://github.com/pwndex/vuespins/blob/master/examples/cdn)
- [Vue-CLI](https://github.com/pwndex/vuespins/blob/master/examples/vcli)
