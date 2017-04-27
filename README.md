## vue-ios-actionsheet

> iOS7+ style alertview service for Vue 2

Vue port of [angular-ios-actionsheet](https://github.com/Treri/angular-ios-actionsheet).

#### Install

```
npm install vue-ios-actionsheet
```

#### Dependences
Promise

#### Usage

```js
vm.$iosActionsheet(buttonGruop[, buttonGroup, buttonGroup ...])
```

buttonGroup = buttonObject | Array<buttonObject>

buttonObject keys:

- text, string
- color, boolean
- bold, boolean
- disable, boolean
- label, boolean
- handle, function, a data object which contains selectedIndex, selectedParentIndex and button will be passed in

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
        // data.selectedParentIndex
        // data.button
    }
}
```

#### Example

```js
import Vue from 'vue';
import vueIosActionsheet from 'vue-ios-actionsheet';

Vue.use(vueIosActionsheet);

new Vue({
  el: '#container',
  methods: {
    actionsheet: function(){
      this.$iosActionsheet({
        text: 'text1',
        label: true
      }, [{
        text: 'title'
      }, {
        text: 'title1',
      }]).then(({button, selectedIndex, selectedParentIndex}) => {

      })
    }
  }
});
```

#### License
MIT
