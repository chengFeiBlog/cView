### Install iView

using npm
```
npm install cview --save
```
Or using script tag for global use
```
<script type="text/javascript" src="cview.min.js"></script>
```

## Usage

```html
<template>
    无双向绑定
    <c-input value="value" range></c-input>
    双向绑定
    <c-input v-model="value" range></c-input>
</template>
<script>
    export default {
        data () {
            return {
                value: 'xxx'
            }
        }
    }
</script>
```
Use css
```js
import 'cview/dist/styles/cview.css';
```

## Browser Support

Normal browsers and Internet Explorer 9+.

## Links

- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
- [ionicons](https://github.com/driftyco/ionicons)
- [Ant Design](https://github.com/ant-design/ant-design)

# We have been in developing, please pay attention to the cView.
