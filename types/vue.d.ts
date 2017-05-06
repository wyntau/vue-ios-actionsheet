import Vue = require('vue');

import {buttonData, buttonObject} from './index';

declare module 'vue/types/vue' {
  interface Vue {
    $iosActionsheet: (...buttons: Array<buttonObject | Array<buttonObject>>) => PromiseLike<buttonData>
  }
}
