# Pulse

## **Basic**

<br>
<client-only>
<Pulse />
</client-only>

### Props

Basic "Pulse" component

| property | propType | required | default | custom |
| :------: | :------: | :------: | :-----: | :----: |
| `color`  |  string  |  false   | #282c34 |   -    |
|  `size`  |  number  |  false   |   50    |   -    |
| `speed`  |  number  |  false   |   2.5   |   -    |

### Usage

<<< @/src/.vuepress/components/Pulse/BasicPulse.doc.vue{3,8,10-13}

## **Custom**

<br>
<client-only>
<Pulse color="#fb503b" :size="80" :speed="5" />
</client-only>

### Props

Custom "Pulse" component

| property | propType | required | default | custom  |
| :------: | :------: | :------: | :-----: | :-----: |
| `color`  |  string  |  false   | #282c34 | #fb503b |
|  `size`  |  number  |  false   |   50    |   80    |
| `speed`  |  number  |  false   |   2.5   |    5    |

### Usage

<<< @/src/.vuepress/components/Pulse/CustomPulse.doc.vue{3,8,10-13}
