# Spinner

## **Basic**

<br>
<client-only>
<Spinner />
</client-only>

### Props

Basic "Spinner" component

| property | propType | required | default | custom |
| :------: | :------: | :------: | :-----: | :----: |
| `color`  |  string  |  false   | #282c34 |   -    |
|  `size`  |  number  |  false   |   50    |   -    |
| `speed`  |  number  |  false   |    2    |   -    |

### Usage

<<< @/src/.vuepress/components/Spinner/BasicSpinner.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<Spinner color="#fb503b" :size="80" :speed="7" />
</client-only>

### Props

Custom "Spinner" component

| property | propType | required | default | custom  |
| :------: | :------: | :------: | :-----: | :-----: |
| `color`  |  string  |  false   | #282c34 | #fb503b |
|  `size`  |  number  |  false   |   50    |   80    |
| `speed`  |  number  |  false   |    2    |    7    |

### Usage

<<< @/src/.vuepress/components/Spinner/CustomSpinner.doc.vue{3,8,10-13}
