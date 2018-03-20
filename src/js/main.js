import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('bootstrap');

let app = new Vue({
    el: '#homework-15',
    data: {
        value: ''
    },
    methods: {
        sayHi: function () {
            alert("Sample alert");
        },
        getInputValue: function (event) {
            this.value = event.target.value;
        }
    }
});