(function (window) {
    'use strict';

    var App = window.App || {};

    function DataStore() {
        console.log('running the datastore function');
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);