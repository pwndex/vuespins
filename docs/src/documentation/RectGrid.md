# Chase

## **Basic**

<br>
<client-only>
<RectGrid />
</client-only>

### Props

Basic "RectGrid" component

| property | propType | required | default | custom |
| :------: | :------: | :------: | :-----: | :----: |
| `color`  |  string  |  false   | #282c34 |   -    |
|  `size`  |  string  |  false   |   50    |   -    |
| `speed`  |  string  |  false   |   1.2   |   -    |

### Usage

<<< @/src/.vuepress/components/RectGrid/BasicRectGrid.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<RectGrid color="#fb503b" size="80" speed="3" />
</client-only>

### Props

Custom "RectGrid" component

| property | propType | required | default | custom  |
| :------: | :------: | :------: | :-----: | :-----: |
| `color`  |  string  |  false   | #282c34 | #fb503b |
|  `size`  |  string  |  false   |   50    |   80    |
| `speed`  |  string  |  false   |   1.2   |    3    |

### Usage

<<< @/src/.vuepress/components/RectGrid/CustomRectGrid.doc.vue{3,8,10-13}
