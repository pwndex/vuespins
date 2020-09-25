# Ring

## **Basic**

<br>
<client-only>
<Ring />
</client-only>

### Props

Basic "Ring" component

|  property   | propType | required | default | custom |
| :---------: | :------: | :------: | :-----: | :----: |
|   `color`   |  string  |  false   | #282c34 |   -    |
|   `size`    |  number  |  false   |   50    |   -    |
| `thickness` |  number  |  false   |    6    |   -    |
|   `speed`   |  number  |  false   |   1.2   |   -    |

### Usage

<<< @/src/.vuepress/components/Ring/BasicRing.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<Ring color="#fb503b" :size="80" :thickness="1" :speed="3" />
</client-only>

### Props

Custom "Ring" component

|  property   | propType | required | default | custom  |
| :---------: | :------: | :------: | :-----: | :-----: |
|   `color`   |  string  |  false   | #282c34 | #fb503b |
|   `size`    |  number  |  false   |   50    |   80    |
| `thickness` |  number  |  false   |    6    |    1    |
|   `speed`   |  number  |  false   |   1.2   |    3    |

### Usage

<<< @/src/.vuepress/components/Ring/CustomRing.doc.vue{3,8,10-13}
