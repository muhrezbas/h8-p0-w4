function checkAB(num) {
  // you can only write your code here!
var jarakA = 0;
var jarakB = 0;

for(i=0; i<num.length; i++){
 if(num[i]==="a"){
   jarakA = i+1
 }
 if(num[i] ==="b"){
   jarakB = i+1
 }
}
if(jarakA - jarakB === 4 || jarakB - jarakA ===4){
  return true
}
else {
  return false
}

}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
