(function() {
    'use strict';

    var rootHostingFolder = 'https://ore4444.github.io/audiovisual-surprise-button/';
    var SOUNDS_FOLDER = rootHostingFolder + 'assets/sounds/';
    var IMAGES_FOLDER = rootHostingFolder + 'assets/images/';
    var IMAGES_FILE_EXTENSION = '.webp';
    var SOUNDS_FILE_EXTENSION = '.mp3';
    var SOUNDS_SELECTOR = '.sounds';
    var IMAGES_SELECTOR = '.images';

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

    function spliceRandomItem(array) {
        var randomIndex = Math.floor(Math.random() * array.length);
        return array.splice(randomIndex, 1)[0];
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
            create: function create($, containerSelector) {
                var image = document.createElement('img');
                image.src = $.imageUrl;
                image.id = 'image-' + $.name;
                image.className = 'image';
                document.querySelector(containerSelector).appendChild(image);
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
            create: function create($, containerSelector) {
                var sound = new Audio($.soundUrl);
                sound.id = 'sound-' + $.name;
                sound.className = 'sound';
                document.querySelector(containerSelector).appendChild(sound);
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

    function playOne(state) {
        pipe(spliceRandomItem, ui.image.show, ui.sound.play, ui.button.disable)(state);
    }

    function onConfigReady(config) {
        var state = buildState(config.filenames);
        state.forEach(function($) {
            ui.image.create($, IMAGES_SELECTOR);
            ui.sound.create($, SOUNDS_SELECTOR);
        });
        ui.button.get().addEventListener('click', function onButtonClick() {
            if (!state.length) {
                state = buildState(config.filenames);
            }
            playOne(state);
        });
    }

    document.addEventListener('DOMContentLoaded', function init() {
        fetch('./config.json').then(function(res) {
            return res.json();
        }).then(onConfigReady);
    });
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }

}());
