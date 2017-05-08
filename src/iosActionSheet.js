import defer from './defer.js';
import IosActionSheetDefine from './iosActionSheet.vue';

function install(Vue){
  const IosActionSheetComponent = Vue.extend(IosActionSheetDefine);

  Vue.prototype.$iosActionSheet = function (...buttons){

    let instance = new IosActionSheetComponent({propsData: {buttons}});

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
