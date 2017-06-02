const ui = {
    image: {
        create($, containerSelector) {
            const image = document.createElement('img')
            image.src = $.imageUrl
            image.id = 'image-' + $.name
            image.className = 'image'
            document.querySelector(containerSelector).appendChild(image)

            return $
        },
    
        get($) {
            return document.getElementById('image-' + $.name)
        },
  
        getAll() {
            return [...document.getElementsByClassName('image')]
        },

        show($) {
            const image = ui.image.get($)
            image.style.transform = 'none'
            return $
        },
    
        hideAll($) {
            const images = ui.image.getAll()
            images.forEach(image => {
                image.style.transform = ''
            })
            return $
        },
    },

    button: {
        get() {
            return document.getElementById('button')
        },

        enable($) {
            const button = ui.button.get()
            button.disabled = false
            return $
        },
    
        disable($) {
            const button = ui.button.get()
            button.disabled = true
            return $
        },
    },
  
    sound: {
        create($, containerSelector) {
            const sound = new Audio($.soundUrl)
            sound.id = 'sound-' + $.name
            sound.className = 'sound'
            document.querySelector(containerSelector).appendChild(sound)
            
            sound.addEventListener('ended', function onSoundEnd() {
                ui.image.hideAll()
                ui.button.enable()
            })
      
            return $
        },
    
        get($) {
            return document.getElementById('sound-' + $.name)
        },

        play($) {
            const sound = ui.sound.get($)
            sound.play()
            return $
        },
    },
}

export default ui
