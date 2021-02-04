//check if an anagram using frequency counter pattern

// function ('anagram', 'nagaram') => returns true 

function validAnagram (str1, str2){

  //if strings have different lengths - not anagram
  if (str1.length !== str2.length){
    return false
  }

  //initialize an empty object
  const lookup = {}

  for ( let i = 0; i < str1.length; i++ ){
    
    let letter = str1[i]
    //starting with letter 'a'. If exists - increment, if no - initialize and set to 1
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
  }

  //after first loop 'for' runs, we get lookup = {a: 3, n: 1, g: 1, r: 1, m: 1}

  //now we need to check the second string
  // if can't find a letter from the second string in lookup object, or it's zero return false
  // if letter exists, we decrement by one, after this loop runs for the second time
  // After first run, we get lookup = {a: 3, n: 0, g: 1, r: 1, m: 1} and loop keeps going

  for ( let i = 0; i < str2.length; i++){
    let letter = str2[i]

    if(!lookup[letter]){
      return false
    }else{
      lookup[letter] -=1
    }
  }
  return true
}

// Time complexity is O(n), since we are not using nesting loops. Each for loop runs once