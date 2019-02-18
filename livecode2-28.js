/*
================
urutanAngkaUlang
================

adalah sebuah program yang berfungsi untuk mengurutkan angka dari ulang
setelah mencapai batas tertentu dalam bentuk array multidimensi

contoh:
input = 9
maka outputnya : 
[ 
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], // baris ke-1 dimulai dari angka 1
  [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ], // baris ke-2 dimulai dari angka 2
  [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
  [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
  [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
  [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
  [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ] 
]

perhatikan bahwa angka tersebut akan kembali ke angka awal = 1 
bila telah mencapai batasnya yaitu angka 9

input = 6
maka outputnya : 
[ 
  [ 1, 2, 3, 4, 5, 6 ],
  [ 2, 3, 4, 5, 6, 1 ],
  [ 3, 4, 5, 6, 1, 2 ],
  [ 4, 5, 6, 1, 2, 3 ],
  [ 5, 6, 1, 2, 3, 4 ],
  [ 6, 1, 2, 3, 4, 5 ] 
]

*/

function urutanAngkaUlang(angka) {
    // your code here
    arr = []
    result = []
    var point = 1
    temp = []
    var urutan = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(i=1; i<=angka; i++)
  {
    temp = []
  for(k= point; k<=angka; k++)
  {
    temp.push(k)
  }
  for(j= 1; j<point; j++)
  {
    temp.push(j)
  }
  result.push(temp)
  point++
  }
  return result
  
  
    // for(i = 0; i<=arr.length; i++){
    // if(arr[i].length===7){
    //   arr[i].push(i)
    //   console.log(arr[i])
    // }
    // }
  
  }
  
  console.log(urutanAngkaUlang(9));
  /*
  [ 
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
    [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
    [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
    [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
    [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
    [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
    [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
    [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ] 
  ]
  */
  
  console.log(urutanAngkaUlang(6));
  /*
  [ 
    [ 1, 2, 3, 4, 5, 6 ],
    [ 2, 3, 4, 5, 6, 1 ],
    [ 3, 4, 5, 6, 1, 2 ],
    [ 4, 5, 6, 1, 2, 3 ],
    [ 5, 6, 1, 2, 3, 4 ],
    [ 6, 1, 2, 3, 4, 5 ] 
  ]
  */