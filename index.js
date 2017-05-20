const rootHostingFolder = 'https://ore4444.github.io/birthday-surprise-button/'
const audioFolder = rootHostingFolder + 'audio/'
const imagesFolder = rootHostingFolder + 'images/'

const filenames = ['agam', 'avraham', 'gilad', 'ilana', 'mali', 'noga', 'rome', 'toam', 'amit', 'ayellet', 'gita', 'itay', 'margalit', 'ore', 'shalev', 'tsuf', 'aviv', 'eden', 'hila', 'lizz', 'noa', 'rami', 'shlomi', 'yossi']

function buildData(filenames) {
  const data = []
  filenames.forEach(name => data.push({
    imageUrl: imagesFolder+name+'.jpg',
    soundUrl: audioFolder+name+'.mp3',
  }))
  
  return data
}

const data = buildData(filenames) 

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const fn = {
	getRandomItem(data) {
		return data[Math.floor(Math.random()*data.length)]
	},

  playSound($) {
    ui.createSound($)
  },
  
  showImage($) {
    return ui.createImage($)
	},
  
  hideImage($) {
    return ui.removeImage($)
  },
}

const ui = {
  createImage($) {
		const image = document.createElement('img')
    image.src = $.imageUrl
    image.id = 'image'
    document.body.appendChild(image)
    image.style = 'opacity:1;'
    
    return $
	},
  
  getImage() {
    return document.getElementById('image')
  },
  
  getButton() {
    return document.getElementById('click-me')
  },
  
  animateImageOut() {
    const image = ui.getImage()
    image.style.opacity = 0
  },
  
  removeImage() {
    const image = ui.getImage() 
    image.parentNode.removeChild(image)
  },
  
  createSound($) {
		const sound = new Audio($.soundUrl)
    sound.id = 'sound'
    document.body.appendChild(sound)
    sound.play();
    sound.addEventListener('ended', onSoundEnd);
    
    return $
  }
}

function nextItem(data) {
  var count = -1;
  return () => data[++count % data.length]
}

function onButtonClick(event) {
  pipe(
    fn.getRandomItem,
    fn.showImage,
    fn.playSound,
  )
  (data)
}

function onSoundEnd() {
  debugger
  ui.removeImage()
}

function init(data) {
  ui.getButton().addEventListener('click', onButtonClick)
}

init(data)