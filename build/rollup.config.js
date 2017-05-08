import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/iosActionSheet.js',
  dest: 'dist/vue-ios-actionsheet.js',
  format: 'umd',
  moduleName: 'vueIosActionSheet',
  exports: 'named',

  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    buble()
  ]
}
