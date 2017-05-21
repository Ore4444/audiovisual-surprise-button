import constants from './constants'
import ui from './ui'
import {pipe, getRandomItem} from './helpers'

import '../scss/index.scss'

let state

function buildData(filenames) {
    const data = []
  
    filenames.forEach(name => data.push({
        imageUrl: constants.imagesFolder + name + constants.imagesFileExtension,
        soundUrl: constants.soundsFolder + name + constants.soundsFileExtension,
        name,
    }))
  
    return data
}

document.addEventListener('DOMContentLoaded', function init() {  
    state = buildData(constants.filenames)

    state.forEach($ => {
        ui.image.create($, '.images')
        ui.sound.create($, '.sounds')
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
