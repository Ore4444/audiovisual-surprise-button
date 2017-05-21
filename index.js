const constants = {}

constants.rootHostingFolder = 'https://ore4444.github.io/birthday-surprise-button/'
constants.soundsFolder = constants.rootHostingFolder + 'audio/'
constants.imagesFolder = constants.rootHostingFolder + 'images/'
constants.imagesFileExtension = '.jpg'
constants.soundsFileExtension = '.mp3'
constants.filenames = ['agam', 'avraham', 'gilad', 'ilana', 'mali', 'noga', 'rome', 'toam', 'ayellet', 'gita', 'itay', 'margalit', 'ore', 'shalev', 'tsuf', 'aviv', 'eden', 'hila', 'lizz', 'rami', 'shlomi', 'yossi',]

let data;

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const fn = {
	getRandomItem(data) {
		return data[Math.floor(Math.random()*data.length)]
	},
}

const ui = {
  image: {
    create($, containerSelecter) {
      const image = document.createElement('img')
      image.src = $.imageUrl
      image.id = 'image-' + $.name
      image.className = 'image'
      document.querySelector(containerSelecter).appendChild(image)

      return $
    },
    
    get($) {
      return document.getElementById('image-' + $.name)
    },
  
    getAll($) {
      return [...document.getElementsByClassName('image')]
    },

    animateOut() {
      const image = ui.image.get()
      image.style.opacity = 0
    },

    show($) {
      const image = ui.image.get($)
      image.style = 'opacity:1;'
      return $
    },
    
    hideAll($) {
      const images = ui.image.getAll()
      for (const image of images) {
        image.style = 'opacity:0;'
      }
      return $
    },
  },

  button: {
    get() {
      return document.getElementById('click-me')
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
    create($, containerSelecter) {
      const sound = new Audio($.soundUrl)
      sound.id = 'sound-' + $.name
      sound.className = 'sound'
      document.querySelector(containerSelecter).appendChild(sound)
      sound.addEventListener('ended', onSoundEnd)
      
      return $
    },
    
    get($) {
      return document.getElementById('sound-' + $.name)
    },

    play($) {
      const sound = ui.sound.get($)
      sound.play()
      return $
    }
  },
}

function nextItem(data) {
  var count = -1;
  return () => data[++count % data.length]
}

function onButtonClick(event) {
  pipe(
    fn.getRandomItem,
    ui.image.show,
    ui.sound.play,
    ui.button.disable,
  )
  (data)
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
    name
  }))
  
  return data
}

function init() {
  ui.button.get().addEventListener('click', onButtonClick)
  
  data = buildData(constants.filenames)

  for (const $ of data) {
    ui.image.create($, '.images')
    ui.sound.create($, '.sounds')
  }
}

init()