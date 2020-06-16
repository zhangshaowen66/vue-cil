import Vue from 'vue'
import { Button, Select } from 'element-ui';
export default function elements () {
  Vue.use(Button);
  Vue.use(Select);
  Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
}
