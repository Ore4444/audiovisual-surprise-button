import {
    SOUNDS_FOLDER,
    SOUNDS_FILE_EXTENSION,
    SOUNDS_SELECTOR,
    IMAGES_FOLDER,
    IMAGES_FILE_EXTENSION,
    IMAGES_SELECTOR,
} from './constants'
import {pipe, spliceRandomItem} from './helpers'
import ui from './ui'

import '../scss/index.scss'

function buildState(filenames) {
    const state = []

    filenames.forEach(name => state.push({
        imageUrl: IMAGES_FOLDER + name + IMAGES_FILE_EXTENSION,
        soundUrl: SOUNDS_FOLDER + name + SOUNDS_FILE_EXTENSION,
        name,
    }))

    return state
}

function playOne(state) {
    pipe(
        spliceRandomItem,
        ui.image.show,
        ui.sound.play,
        ui.button.disable,
    )(state)
}

function onConfigReady(config) {
    let state = buildState(config.filenames)

    state.forEach($ => {
        ui.image.create($, IMAGES_SELECTOR)
        ui.sound.create($, SOUNDS_SELECTOR)
    })

    ui.button.get().addEventListener('click', function onButtonClick() {
        if (!state.length) {
            state = buildState(config.filenames)
        }

        playOne(state)
    })
}

document.addEventListener('DOMContentLoaded', function init() {
    fetch('./config.json')
        .then(res => res.json())
        .then(onConfigReady)
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
}
