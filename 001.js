/*
======================
Highest Global Minimum
======================

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
*/

/*
Pseducode/ algoritma anda di sini
STORE "result1" with firstArr array 0
STORE "result2" with secondArr array 0
STORE i with 0

WHILE "i" < firstArr length
  IF "result1" > to firstArr Array I
  do result1 equal firstArr Array I

WHILE "i" < secondArr length
  IF "result2" > to secondArr Array I
 do  result2 equal secondArr Array I


   IF "result1" > to "result2"
   Display result1

  IF "result2" > to "result1"
   Display result2
   
*/

function highestGlobalMinimum(firstArr, secondArr) {
  // code anda disini
  var result1 = firstArr[0]
  var result2 = secondArr[0]

  for(i= 0; i<firstArr.length; i++){
  if(result1>firstArr[i]){
    result1= firstArr[i]
  }
  
  }
  for(i= 0; i<secondArr.length; i++){
  if(result2>secondArr[i]){
    result2= secondArr[i]
  }
  
  }
  if(result1>result2){
     return result1
  }
  if(result2>result1){
     return result2
  }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5