function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var result = 0
  var jawaban = 0
  var length1 = 0
  var length2 = 0
  var length3 = 0
for(i = 1 ; i<=angka; i++){
  if(angka%i === 0){ 
  result = Math.floor(angka/i)
  jawaban = String(result)+String(i)
  // console.log(jawaban)
  if(length1 === 0){
  length1 = jawaban.length
  }
  else if(length1 !== 0 && length2 === 0){
    length2 = jawaban.length
  }
  else if(length1 !==0 && length2 !== 0 && length3 ===0){
    length3 = jawaban.length
    if(length1<length2){
      length1 = length1
      length2 = 0
     
    }
    else if(length2<length1){
      length1 = length2
      length2 = 0
    }
    else if(length2===length1){
      length1 = length1
      length2 = 0
    }
  }
  else if(length1 !==0 && length3 !==0){
    length2 = jawaban.length
   
    if(length1<length3){
      length1 = length1
      length3 = 0
    }
    else if(length2<length1){
      length1 = length3
      length3 = 0
    }
    else if(length1 === length3){
      length3 = 0
    }
  }
  }
}
if(length1>length2 && length2 !== 0){
  return length2
}
if(length1>length3 && length3 !== 0){
  return length3
}
return length1

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2