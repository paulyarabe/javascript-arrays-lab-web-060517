const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  function prepend(value, array) {
    var newArray = array.slice();
    newArray.unshift(value);
    return newArray;
  };
  var k_arr = prepend(name, kittens);
  return k_arr
}

function removeLastKitten(){
  var copy = kittens.slice();
  var removed_last = copy.slice(0,-1);
  return removed_last
}

function removeFirstKitten(){
  var copy = kittens.slice();
  var removed_first = copy.slice(1);
  return removed_first
}
