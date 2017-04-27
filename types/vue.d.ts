import Vue = require('vue');

interface buttonData {
  button: buttonObject;
  selectedIndex: number;
  selectedGroupIndex: number;
}

interface buttonObject {
  text: string;
  color?: boolean;
  bold?: boolean;
  disable?: boolean;
  label?: boolean;
  handle?: (buttonData: buttonData) => any;
  [key: string]: any;
}

declare module 'vue/types/vue' {
  interface Vue {
    $iosActionsheet: (...buttons: Array<buttonObject | Array<buttonObject>>) => PromiseLike<buttonData>
  }
}
