/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous/src',
        adarta: '../lib/adarta/src',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond'
    }
});
require(['main']);