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
|   `size`    |  string  |  false   |   50    |   -    |
| `thickness` |  string  |  false   |    6    |   -    |

### Usage

<<< @/src/.vuepress/components/Ring/BasicRing.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<Ring color="#fb503b" size="80" thickness="1" />
</client-only>

### Props

Custom "Ring" component

|  property   | propType | required | default | custom  |
| :---------: | :------: | :------: | :-----: | :-----: |
|   `color`   |  string  |  false   | #282c34 | #fb503b |
|   `size`    |  string  |  false   |   50    |   80    |
| `thickness` |  string  |  false   |    6    |    1    |

### Usage

<<< @/src/.vuepress/components/Ring/CustomRing.doc.vue{3,8,10-13}
