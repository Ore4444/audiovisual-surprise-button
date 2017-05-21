(function() {
    'use strict';

    var rootHostingFolder = 'https://ore4444.github.io/audiovisual-surprise-button/';
    var soundsFolder = rootHostingFolder + 'sounds/';
    var imagesFolder = rootHostingFolder + 'images/';
    var imagesFileExtension = '.jpg';
    var soundsFileExtension = '.mp3';
    var filenames = ['agam', 'avraham', 'gilad', 'ilana', 'mali', 'noga', 'rome', 'toam', 'ayellet', 'gita', 'itay', 'margalit', 'ore', 'shalev', 'tsuf', 'aviv', 'eden', 'hila', 'lizz', 'rami', 'shlomi', 'yossi'];
    var constants = {
        soundsFolder: soundsFolder,
        imagesFolder: imagesFolder,
        imagesFileExtension: imagesFileExtension,
        soundsFileExtension: soundsFileExtension,
        filenames: filenames
    };

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
                    return image.style.transform = 'translateY(calc(-100vh)';
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
                sound.addEventListener('ended', onSoundEnd);
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

    var state = void 0;
    function onButtonClick() {
        pipe(getRandomItem, ui.image.show, ui.sound.play, ui.button.disable)(state);
    }

    function buildData(filenames) {
        var data = [];
        filenames.forEach(function(name) {
            return data.push({
                imageUrl: constants.imagesFolder + name + constants.imagesFileExtension,
                soundUrl: constants.soundsFolder + name + constants.soundsFileExtension,
                name: name
            });
        });
        return data;
    }

    function init() {
        ui.button.get().addEventListener('click', onButtonClick);
        state = buildData(constants.filenames);
        state.forEach(function($) {
            ui.image.create($, '.images');
            ui.sound.create($, '.sounds');
        });
    }

    document.addEventListener('DOMContentLoaded', init);

}());
