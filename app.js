function removeapples(arr){ 
    return arr.map(elem => !!elem)
}

console.log (removeapples(['organges', 'banana', 'apple']));