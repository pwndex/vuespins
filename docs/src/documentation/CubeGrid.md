# CubeGrid

## **Basic**

<br>
<client-only>
<CubeGrid />
</client-only>

### Props

Basic "CubeGrid" component

| property | propType | required | default | custom |
| :------: | :------: | :------: | :-----: | :----: |
| `color`  |  string  |  false   | #282c34 |   -    |
|  `size`  |  string  |  false   |   50    |   -    |
| `speed`  |  string  |  false   |   1.3   |   -    |

### Usage

<<< @/src/.vuepress/components/CubeGrid/BasicCubeGrid.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<CubeGrid color="#fb503b" size="80" speed="5" />
</client-only>

### Props

Custom "CubeGrid" component

| property | propType | required | default | custom  |
| :------: | :------: | :------: | :-----: | :-----: |
| `color`  |  string  |  false   | #282c34 | #fb503b |
|  `size`  |  string  |  false   |   50    |   80    |
| `speed`  |  string  |  false   |   1.3   |    5    |

### Usage

<<< @/src/.vuepress/components/CubeGrid/CustomCubeGrid.doc.vue{3,8,10-13}
