<br>
<br>
<p align="center">
  <a href="https://github.com/pwndex/vue-css-spinners" target="_blank">
    <img width="200" src="https://user-images.githubusercontent.com/65390434/91702828-ba34da80-eb92-11ea-9064-92535e283b99.png" alt="logo">
  </a>
</p>
<br>
<br>
<br>

# Installation

### Demo

Browse components and explore their props with [Docs](https://pwndex.github.io/vuespins)

### Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [Yarn Classic](https://classic.yarnpkg.com/en/)

### Quick Start

To install it, open up your terminal and run

```sh
npm install vuespins
# or yarn - whichever you prefer
yarn add vuespins
```

# Usage

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

```vue
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

```vue
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
  components: {
    CubeGrid
  }
}
</script>
```

## Examples

You will find further demos under `/examples` folder

- [CDN](./examples/cdn)
- [Vue-CLI](./examples/vcli)

## Copyright

MIT Licensed | Copyright © 2020-present Amal Greenberg
