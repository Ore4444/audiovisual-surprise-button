import {SOUNDS_FOLDER, IMAGES_FOLDER, IMAGES_FILE_EXTENSION, SOUNDS_FILE_EXTENSION, FILENAMES} from './constants'
import ui from './ui'
import {pipe, getRandomItem} from './helpers'

import '../scss/index.scss'

let state

function buildData(filenames) {
    const data = []
  
    filenames.forEach(name => data.push({
        imageUrl: IMAGES_FOLDER + name + IMAGES_FILE_EXTENSION,
        soundUrl: SOUNDS_FOLDER + name + SOUNDS_FILE_EXTENSION,
        name,
    }))
  
    return data
}

document.addEventListener('DOMContentLoaded', function init() {  
    const data = buildData(FILENAMES)

    data.forEach($ => {
        ui.image.create($, '.images')
        ui.sound.create($, '.sounds')
    })

    ui.button.get().addEventListener('click', function onButtonClick() {
        pipe(
            getRandomItem,
            ui.image.show,
            ui.sound.play,
            ui.button.disable,
        )(data)
    })
})
