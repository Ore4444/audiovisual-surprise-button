import constants from './constants'
import ui from './ui'
import {pipe, getRandomItem} from './helpers'

import '../scss/index.scss'

let state

function onButtonClick() {
    pipe(
        getRandomItem,
        ui.image.show,
        ui.sound.play,
        ui.button.disable,
    )(state)
}

function onSoundEnd() {
    ui.image.hideAll()
    ui.button.enable()
}

function buildData(filenames) {
    const data = []
  
    filenames.forEach(name => data.push({
        imageUrl: constants.imagesFolder + name + constants.imagesFileExtension,
        soundUrl: constants.soundsFolder + name + constants.soundsFileExtension,
        name,
    }))
  
    return data
}

function init() {
    ui.button.get().addEventListener('click', onButtonClick)
  
    state = buildData(constants.filenames)

    state.forEach($ => {
        ui.image.create($, '.images')
        ui.sound.create($, '.sounds')
    })
}

document.addEventListener('DOMContentLoaded', init)
