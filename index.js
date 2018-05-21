const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.append(`${name}`)
}


 destructivelyAppendKitten("okay")
 console.log(kittens)