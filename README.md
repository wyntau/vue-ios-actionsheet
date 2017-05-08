## vue-ios-actionsheet

> iOS7+ style actionsheet service for Vue 2

Vue port of [angular-ios-actionsheet](https://github.com/Treri/angular-ios-actionsheet).

#### Install

```
npm install vue-ios-actionsheet
```

#### Dependences
Promise

#### Usage

```js
vm.$iosActionSheet(buttonGruop[, buttonGroup, buttonGroup ...])
```

buttonGroup = buttonObject | buttonObject[]

buttonObject keys:

- text, string
- color, boolean
- bold, boolean
- disable, boolean
- label, boolean
- handle, function, a data object which contains selectedIndex, selectedGroupIndex and button will be passed in

an example of buttonObject

```js
{
    text: 'button',
    color: true,
    bold: true,
    disable: false,
    label: false,
    handle: function(data){
        // data.selectedIndex
        // data.selectedGroupIndex
        // data.button
    }
}
```

#### Example

```js
import Vue from 'vue';
import vueIosActionSheet from 'vue-ios-actionsheet';

Vue.use(vueIosActionSheet);

new Vue({
  el: '#container',
  methods: {
    actionsheet: function(){
      this.$iosActionSheet({
        text: 'text1',
        label: true
      }, [{
        text: 'title'
      }, {
        text: 'title1',
      }]).then(({button, selectedIndex, selectedGroupIndex}) => {

      })
    }
  }
});
```

#### License
MIT
