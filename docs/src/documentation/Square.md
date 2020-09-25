# Square

## **Basic**

<br>
<client-only>
<Square />
</client-only>

### Props

Basic "Square" component

| property | propType | required | default | custom |
| :------: | :------: | :------: | :-----: | :----: |
| `color`  |  string  |  false   | #282c34 |   -    |
|  `size`  |  number  |  false   |   50    |   -    |
| `speed`  |  number  |  false   |   1.2   |   -    |

### Usage

<<< @/src/.vuepress/components/Square/BasicSquare.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<Square color="#fb503b" :size="80" :speed="5" />
</client-only>

### Props

Custom "Square" component

| property | propType | required | default | custom  |
| :------: | :------: | :------: | :-----: | :-----: |
| `color`  |  string  |  false   | #282c34 | #fb503b |
|  `size`  |  number  |  false   |   50    |   80    |
| `speed`  |  number  |  false   |   1.2   |    5    |

### Usage

<<< @/src/.vuepress/components/Square/CustomSquare.doc.vue{3,8,10-13}
