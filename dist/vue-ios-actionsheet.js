(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vueIosActionsheet = global.vueIosActionsheet || {})));
}(this, (function (exports) { 'use strict';

// a mini defer like angular's $q.defer()
var defer = function(){
  var promise;
  var resolve;
  var reject;

  promise = new Promise(function(_resolve_, _reject_){
    resolve = _resolve_;
    reject = _reject_;
  });

  return {
    promise: promise,
    resolve: resolve,
    reject: reject
  };
};

(function(){ if(document){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .ios-actionsheet-overlay{ font-family: Helvetica Neue,Helvetica,Arial,sans-serif; color: #000; font-size: 14px; line-height: 1.4; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); z-index: 10600; } .ios-actionsheet-overlay.v-enter{ opacity: 0; } .ios-actionsheet-overlay.v-enter-active{ transition: opacity .4s; } .ios-actionsheet-overlay.v-leave-active{ opacity: 0; transition: opacity .4s; } .ios-actionsheet-overlay *{ -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; } .ios-actionsheet{ position: absolute; left: 0; bottom: 0; z-index: 11000; width: 100%; transform: translate3d(0,0,0); } .ios-actionsheet-overlay.v-enter .ios-actionsheet{ transform: translate3d(0,100%,0); } .ios-actionsheet-overlay.v-enter-active .ios-actionsheet{ transition: transform .3s; } .ios-actionsheet-overlay.v-leave-active .ios-actionsheet{ transform: translate3d(0,100%,0); transition: transform .4s; } .ios-actionsheet-group{ margin: 8px; } .ios-actionsheet-button, .ios-actionsheet-label { width: 100%; text-align: center; font-weight: 400; margin: 0; background: rgba(243,243,243,.95); box-sizing: border-box; display: block; position: relative; } .ios-actionsheet-button:after, .ios-actionsheet-label:after { content: ''; position: absolute; left: 0; bottom: 0; right: auto; top: auto; height: 1px; width: 100%; background-color: #d2d2d6; display: block; z-index: 15; -webkit-transform-origin: 50% 100%; -ms-transform-origin: 50% 100%; transform-origin: 50% 100%; } .ios-actionsheet-label { font-size: 13px; line-height: 1.3; min-height: 44px; padding: 8px 10px; color: #8a8a8a; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; } .ios-actionsheet-button { cursor: pointer; line-height: 43px; font-size: 20px; color: #007aff; } .ios-actionsheet-button.ios-actionsheet-button-color, .ios-actionsheet-label.ios-actionsheet-button-color{ color: #ff3b30; } .ios-actionsheet-button.ios-actionsheet-button-bold, .ios-actionsheet-label.ios-actionsheet-button-bold{ font-weight: bold; } .ios-actionsheet-button.ios-actionsheet-button-disable, .ios-actionsheet-label.ios-actionsheet-button-disable{ /*opacity: 0.95;*/ color: #8e8e93; } .ios-actionsheet-button:first-child, .ios-actionsheet-label:first-child { border-radius: 4px 4px 0 0; } .ios-actionsheet-button:last-child, .ios-actionsheet-label:last-child { border-radius: 0 0 4px 4px; } .ios-actionsheet-button:last-child:after, .ios-actionsheet-label:last-child:after{ display: none; } .ios-actionsheet-button:first-child:last-child, .ios-actionsheet-label:first-child:last-child { border-radius: 4px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();












var IosActionsheetDefine = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{on:{"after-leave":_vm.afterLeave}},[(_vm.showModal)?_c('div',{staticClass:"ios-actionsheet-overlay",on:{"click":_vm.deactivate}},[_c('div',{staticClass:"ios-actionsheet"},_vm._l((_vm.groups),function(group,groupIndex){return _c('div',{staticClass:"ios-actionsheet-group"},_vm._l((group),function(button,index){return _c('div',{class:{'ios-actionsheet-label': button.label, 'ios-actionsheet-button': !button.label, 'ios-actionsheet-button-color': button.color, 'ios-actionsheet-button-bold': button.bold, 'ios-actionsheet-button-disable': button.disable},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();_vm.onClick(button, index, groupIndex);}}},[_vm._v(_vm._s(button.text))])}))}))]):_vm._e()])},staticRenderFns: [],
  props: {
    buttons: [Array]
  },
  data: function(){
    return {
      showModal: false
    };
  },
  methods: {
    activate: function(){
      this._deferred = defer();
      this.showModal = true;
      return this._deferred.promise;
    },
    deactivate: function(){
      this.showModal = false;
      this._deferred.reject();
    },
    onClick: function(button, selectedIndex, selectedGroupIndex){
      if(button.disable || button.label){
        return;
      }

      if(button.handle){
        button.handle({button: button, selectedIndex: selectedIndex, selectedGroupIndex: selectedGroupIndex});
      }

      this._deferred.resolve({button: button, selectedIndex: selectedIndex, selectedGroupIndex: selectedGroupIndex});

      this.showModal = false;

      console.log(this.showModal);
    },
    afterLeave: function(){
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  computed: {
    groups: function(){
      if(!this.buttons){
        return [];
      }

      return this.buttons.map(function(group){
        if(Object.prototype.toString.call(group) === '[object Object]'){
          return [group];
        }else{
          return group;
        }
      });
    }
  }
};

function install(Vue){
  var IosActionsheetComponent = Vue.extend(IosActionsheetDefine);

  Vue.prototype.$iosActionsheet = function (){
    var buttons = [], len = arguments.length;
    while ( len-- ) buttons[ len ] = arguments[ len ];


    var instance = new IosActionsheetComponent({propsData: {buttons: buttons}});

    var mount = document.createElement('div');
    mount.id = 'ios-actionsheet-' + Date.now();
    document.body.appendChild(mount);

    instance.$mount(mount);

    return instance.activate();
  };
}

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(install);
}

exports['default'] = install;

Object.defineProperty(exports, '__esModule', { value: true });

})));
