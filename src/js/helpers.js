function pipe(...fns) {
    return x => fns.reduce((y, f) => f(y), x)
}

function spliceRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array.splice(randomIndex, 1)[0]
}

export {pipe, spliceRandomItem}
