function pipe(...fns) {
    return x => fns.reduce((y, f) => f(y), x)
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export {pipe, getRandomItem}
