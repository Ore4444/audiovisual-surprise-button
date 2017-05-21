(function() {
    'use strict';

    var rootHostingFolder = 'https://ore4444.github.io/audiovisual-surprise-button/';
    var SOUNDS_FOLDER = rootHostingFolder + 'sounds/';
    var IMAGES_FOLDER = rootHostingFolder + 'images/';
    var IMAGES_FILE_EXTENSION = '.webp';
    var SOUNDS_FILE_EXTENSION = '.mp3';
    var SOUNDS_SELECTOR = '.sounds';
    var IMAGES_SELECTOR = '.images';
    var FILENAMES = ['agam', 'avraham', 'gilad', 'ilana', 'mali', 'noga', 'rome', 'toam', 'ayellet', 'gita', 'itay', 'margalit', 'ore', 'shalev', 'tsuf', 'aviv', 'eden', 'hila', 'lizz', 'rami', 'shlomi', 'yossi'];

    function pipe() {
        for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
            fns[_key] = arguments[_key];
        }
        return function(x) {
            return fns.reduce(function(y, f) {
                return f(y);
            }, x);
        };
    }

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    var toConsumableArray = function(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        } else {
            return Array.from(arr);
        }
    };

    var ui = {
        image: {
            create: function create($, containerSelecter) {
                var image = document.createElement('img');
                image.src = $.imageUrl;
                image.id = 'image-' + $.name;
                image.className = 'image';
                document.querySelector(containerSelecter).appendChild(image);
                return $;
            },
            get: function get$$1($) {
                return document.getElementById('image-' + $.name);
            },
            getAll: function getAll() {
                return [].concat(toConsumableArray(document.getElementsByClassName('image')));
            },
            show: function show($) {
                var image = ui.image.get($);
                image.style.transform = 'none';
                return $;
            },
            hideAll: function hideAll($) {
                var images = ui.image.getAll();
                images.forEach(function(image) {
                    image.style.transform = '';
                });
                return $;
            }
        },
        button: {
            get: function get$$1() {
                return document.getElementById('button');
            },
            enable: function enable($) {
                var button = ui.button.get();
                button.disabled = false;
                return $;
            },
            disable: function disable($) {
                var button = ui.button.get();
                button.disabled = true;
                return $;
            }
        },
        sound: {
            create: function create($, containerSelecter) {
                var sound = new Audio($.soundUrl);
                sound.id = 'sound-' + $.name;
                sound.className = 'sound';
                document.querySelector(containerSelecter).appendChild(sound);
                sound.addEventListener('ended', function onSoundEnd() {
                    ui.image.hideAll();
                    ui.button.enable();
                });
                return $;
            },
            get: function get$$1($) {
                return document.getElementById('sound-' + $.name);
            },
            play: function play($) {
                var sound = ui.sound.get($);
                sound.play();
                return $;
            }
        }
    };

    function buildState(filenames) {
        var state = [];
        filenames.forEach(function(name) {
            return state.push({
                imageUrl: IMAGES_FOLDER + name + IMAGES_FILE_EXTENSION,
                soundUrl: SOUNDS_FOLDER + name + SOUNDS_FILE_EXTENSION,
                name: name
            });
        });
        return state;
    }

    document.addEventListener('DOMContentLoaded', function init() {
        var state = buildState(FILENAMES);
        state.forEach(function($) {
            ui.image.create($, IMAGES_SELECTOR);
            ui.sound.create($, SOUNDS_SELECTOR);
        });
        ui.button.get().addEventListener('click', function onButtonClick() {
            pipe(getRandomItem, ui.image.show, ui.sound.play, ui.button.disable)(state);
        });
    });
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }

}());
