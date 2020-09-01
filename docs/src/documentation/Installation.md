# Installation

## Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [Yarn Classic](https://classic.yarnpkg.com/en/)

## Quick Start

To install **vuespins**, open up your terminal and run

```shell
npm install vuespins
# or yarn - whichever you prefer
yarn add vuespins
```

Import any spinner and customize it to your liking

```vue
<template>
  <div>
    <div>
      <CubeGrid />
    </div>
    <div>
      <CubeGrid color="#282c34" size="80" />
    </div>
    <div>
      <CubeGrid color="red" size="30" />
    </div>
  </div>
</template>

<script>
import { CubeGrid } from 'vuespins'

export default {
  components: { CubeGrid },
}
</script>
```

## CDN

```html
<script src="./node_modules/vuespins/dist/vuespins.min.js"></script>
```

## Global Registration

Import **vuespins** and `Vue.use()` it

```js
import Vue from 'vue'
import Vuespins from 'vuespins'

Vue.use(Vuespins)
```

Then you can use spinners anywhere in your project

```vue
<template>
  <div>
    <div>
      <CubeGrid />
    </div>
    <div>
      <CubeGrid color="#282c34" size="80" />
    </div>
    <div>
      <CubeGrid color="red" size="30" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-component',
}
</script>
```
