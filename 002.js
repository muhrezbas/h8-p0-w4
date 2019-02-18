/* 
====================
Count Place Distance
====================

[INSTRUCTION]
Fungsi countDistance dibuat untuk menghitung jarak dua tempat yang diwakili oleh huruf 'o' di dalam array multidimensi
Terdapat 2 parameter yang diperlukan oleh fungsi countDistance, param pertama berupa array multidimensi,
param kedua berupa number yang menunjukkan uang yang kita miliki saat ini

Ketika melewati huruf 'x' maka uang pengendara akan berkurang sebesar 10000 , dan jika uang habis atau kurang dari 10000
maka perjalanan akan terhenti

[EXAMPLE]
Input :  
[
  ['', 'o', 'x', 'x', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 40000
output :  
Sisa uang : 20000, jarak tempuh: 30 km 

Input :  
[
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 30000
output :  
Uang anda habis, jarak tersisa sampai tujuan adalah 10 km

[RULES]
- Dilarang menggunakan indexOf, sort, includes.
- Dilarang menggunakan regex .match dan lainnya!
*/


function countDistance(arr, money) {
  // code anda disini
  var uangSekarang = money;
  var awal = 0
  var pointer = 0
  var totalJarak = 0
  var sisaJarak = 0
  var jarakSisa = 0
for(i=0; i<arr.length; i++){
for(j=0; j<arr[i].length; j++){
if(arr[i][j]==="o"){
pointer++
}
if(pointer === 1 ){
  awal++
  // console.log(awal)
}
// console.log("pointer => " + pointer)
if(pointer === 1 && arr[i][j]==="x"){
uangSekarang = uangSekarang - 10000
// console.log("uangSekarang >>" + uangSekarang)
}
if(uangSekarang<=0 && pointer === 1){
jarakSisa++
// console.log("sisa jarak >>" + jarakSisa)
}
}
}
totalJarak = (awal-1) * 10
sisaJarak = (jarakSisa-1)*10
// return totalJarak
if(uangSekarang>0){
return "Sisa uang : " + uangSekarang + ", jarak tempuh: " +  totalJarak + " km"
}
else{
return "uang anda habis,  jarak tersisa sampai tujuan adalah " + sisaJarak + " km"
}
}

console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
], 40000))
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */

console.log(countDistance([
  ['', '', 'o', '', ''],
  ['', 'x', ''],
  ['', '', '', '', '', 'x'],
  ['', 'o', '', '']
], 50000))
// output:
/* Sisa uang : 30000, jarak tempuh: 120 km */

console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/

console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
], 30000))
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/