import {
    SOUNDS_FOLDER,
    SOUNDS_FILE_EXTENSION,
    SOUNDS_SELECTOR,
    IMAGES_FOLDER,
    IMAGES_FILE_EXTENSION,
    IMAGES_SELECTOR,
    FILENAMES,
} from './constants'
import {pipe, getRandomItem} from './helpers'
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

document.addEventListener('DOMContentLoaded', function init() {  
    const state = buildState(FILENAMES)

    state.forEach($ => {
        ui.image.create($, IMAGES_SELECTOR)
        ui.sound.create($, SOUNDS_SELECTOR)
    })

    ui.button.get().addEventListener('click', function onButtonClick() {
        pipe(
            getRandomItem,
            ui.image.show,
            ui.sound.play,
            ui.button.disable,
        )(state)
    })
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw/sw.js')
}
