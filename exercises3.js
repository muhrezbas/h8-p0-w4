function cariMedian(arr) {
  // you can only write your code here!
  // jarak1 = 0
  // angka1 = ""
  // jarak2 = 0
  // angka2 = ""
  // for(i = 0; i<arr.length; i++){
    
  
  // }
 var seluruh = Math.floor(arr.length/2)
 var seluruhkoma = arr.length/2
//  console.log(seluruh)
 if(seluruhkoma%1 === 0.5){
   return arr[seluruh]
 }
 else {
   return (arr[seluruhkoma]+arr[seluruhkoma-1])/2
 }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5