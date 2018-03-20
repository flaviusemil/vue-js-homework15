import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('bootstrap');

let app = new Vue({
    el: '#homework-15',
    data: {
        value: 'test'
    },
    methods: {
        sayHi: function () {
            alert("Sample alert");
        }
    }
});