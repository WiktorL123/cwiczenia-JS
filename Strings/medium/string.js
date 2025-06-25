const replaceWhiteSpace = function (str) {
    return str.split(' ').join('-').toUpperCase()

}

console.log(replaceWhiteSpace('To Jest Test'))