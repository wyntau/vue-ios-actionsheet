import defer from './defer.js';
import IosActionsheetDefine from './iosActionsheet.vue';

function install(Vue){
  const IosActionsheetComponent = Vue.extend(IosActionsheetDefine);

  Vue.prototype.$iosActionsheet = function (...buttons){

    let instance = new IosActionsheetComponent({propsData: {buttons}});

    let mount = document.createElement('div');
    mount.id = 'ios-actionsheet-' + Date.now();
    document.body.appendChild(mount);

    instance.$mount(mount);

    return instance.activate();
  };
}

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(install);
}

export default install;
