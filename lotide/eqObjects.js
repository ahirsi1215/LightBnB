const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(ar1, ar2){
    for (let i = 0; i < ar1.length; i++){
      if (ar1[i] === ar2[i]){
        return true;
       }
       if (ar1[i] !== ar2[i]){
        return false
       }
      }
    }

const eqObjects = function(object1, object2) {
  //obj are equal when they have the same number of keys
  // same values in each key
  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)
  if (obj1.length !== obj2.length){
    return false
  }
  else {
    for(const o of obj1) {
    if (Array.isArray(object1[o]) && Array.isArray(object2[o])){  
    return eqArrays(object1[o], object2[o])
  } 
  else if(object1[o] !== object2[o])
  return false

  }
  }
  return true
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false