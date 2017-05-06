import './vue';

import { PluginFunction } from 'vue';

export interface buttonData {
  button: buttonObject;
  selectedIndex: number;
  selectedGroupIndex: number;
}

export interface buttonObject {
  text: string;
  color?: boolean;
  bold?: boolean;
  disable?: boolean;
  label?: boolean;
  handle?: (buttonData: buttonData) => any;
  [key: string]: any;
}

export default VueIosActionsheet;

declare let VueIosActionsheet: PluginFunction<never>;
