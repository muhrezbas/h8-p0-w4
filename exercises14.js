function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  result =[]

  for(var i = 0; i<arrPenumpang.length; i++){
       objTemp = {
    penumpang :arrPenumpang[i][0],
    naikDari : arrPenumpang[i][1],
    tujuan : arrPenumpang[i][2],
    bayar : 0
  }
    for(var j = 0; j<rute.length; j++){
     
      if(arrPenumpang[i][1]===rute[j]){
        var naik = j
      }
      if(arrPenumpang[i][2]===rute[j]){
        var tujuan = j
      }
    }
    objTemp.bayar = (tujuan - naik) * 2000
    result.push(objTemp)
    
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]