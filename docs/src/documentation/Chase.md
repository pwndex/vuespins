# Chase

## **Basic**

<br>
<client-only>
<Chase />
</client-only>

### Props

Basic "Chase" component

| property | propType | required | default | custom |
| :------: | :------: | :------: | :-----: | :----: |
| `color`  |  string  |  false   | #282c34 |   -    |
|  `size`  |  number  |  false   |   50    |   -    |
| `speed`  |  number  |  false   |   2.5   |   -    |

### Usage

<<< @/src/.vuepress/components/Chase/BasicChase.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<Chase color="#fb503b" :size="80" :speed="5" />
</client-only>

### Props

Custom "Chase" component

| property | propType | required | default | custom  |
| :------: | :------: | :------: | :-----: | :-----: |
| `color`  |  string  |  false   | #282c34 | #fb503b |
|  `size`  |  number  |  false   |   50    |   80    |
| `speed`  |  number  |  false   |   2.5   |    5    |

### Usage

<<< @/src/.vuepress/components/Chase/CustomChase.doc.vue{3,8,10-13}
