function cariModus(arr) {
    // you can only write your code here!
    var jumlahModus1 = 0
    var jumlahModus2 = 0
    var jumlahModus3 = 0
    var angkaModus1 =""
    var angkaModus2 =""
    var angkaModus3 =""
      for(var i=0;i<arr.length;i++) {
      for(var j=0;j<arr.length-i;j++) {
        if(arr[j]>arr[j+1]) {
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1]=temp
        }
      }
    }
    // console.log(arr)
    for(i =0; i<arr.length; i++){
      if(jumlahModus1 === 0){
        var angkaModus1 =arr[i]
        jumlahModus1++
        // console.log(jumlahModus1)
  
      }
        else if(jumlahModus1 !==0 && angkaModus1 === arr[i] && jumlahModus3 ===0 ){
        angkaModus1 = arr[i]
        jumlahModus1++
      }
      else if(jumlahModus1 !== 0 && jumlahModus2 === 0 && angkaModus1 !== arr[i] && jumlahModus3 ===0){
        angkaModus2 = arr[i]
        jumlahModus2++
        
        // console.log(angkaModus2)
      }
       else if(jumlahModus1 !==0 && jumlahModus2 !== 0 && angkaModus2 === arr[i] && jumlahModus3 ===0){
        angkaModus2 = arr[i]
        jumlahModus2++
        // console.log(jumlahModus2)
        //  console.log(angkaModus2)
      }
      else if(jumlahModus1 !==0 && jumlahModus2 === 0 && angkaModus3 === arr[i] && jumlahModus3 !==0){
        angkaModus3 = arr[i]
        jumlahModus3++
    // console.log(angkaModus3)
      }
            else if(jumlahModus1 !==0 && jumlahModus2 !== 0){
        angkaModus3 = arr[i]
        jumlahModus3++
        if(jumlahModus1>jumlahModus2){
          jumlahModus2 = 0
          angkaModus2 =""
          // console.log(jumlahModus2)
        }
        else if(jumlahModus2>jumlahModus1){
          jumlahModus1 = jumlahModus2
          angkaModus1 = angkaModus2
          jumlahModus2 = 0
          angkaModus2 = ""
          // console.log(angkaModus1)
        }
        else if(jumlahModus2 === jumlahModus1){
          if(Number(angkaModus1)>Number(angkaModus2)){
           jumlahModus2 = 0
          angkaModus2 =""
          // console.log(angkaModus1)
          }
          else if(Number(angkaModus2)>Number(angkaModus1)){
           jumlahModus1 = jumlahModus2
          angkaModus1 = angkaModus2
          jumlahModus2 = 0
          angkaModus2 = ""
          // console.log(angkaModus1)
          }
        }
      }
      else if(jumlahModus3 !==0 && jumlahModus2 === 0 && angkaModus3 === arr[i]){
        jumlahModus3++
      }
      else if(jumlahModus1 !==0 && jumlahModus3 !== 0){
        angkaModus2 = arr[i]
        jumlahModus2++
        // console.log(i)
        if(jumlahModus1>jumlahModus3){
          jumlahModus3 = 0
          angkaModus3 =""
          // console.log(jumlahModus3)
        }
        else if(jumlahModus3>jumlahModus1){
          jumlahModus1 = jumlahModus3
          angkaModus1 = angkaModus3
          jumlahModus3 = 0
          angkaModus3 = ""
          // console.log(angkaModus1)
        }
        else if(jumlahModus3 === jumlahModus1){
          if(Number(angkaModus1)>Number(angkaModus3)){
           jumlahModus3 = 0
          angkaModus3 =""
          // console.log(angkaModus1)
          
          }
          else if(Number(angkaModus3)>Number(angkaModus1)){
           jumlahModus1 = jumlahModus3
          angkaModus1 = angkaModus3
          jumlahModus3 = 0
          angkaModus3 = ""
          // console.log(angkaModus1)
          }
        }
      }
    }
    // console.log(jumlahModus2)
  if(jumlahModus2>jumlahModus1){
    angkaModus1 = angkaModus2
  }
  if(jumlahModus3>jumlahModus1){
    angkaModus1 =angkaModus3
  }
  // console.log(angkaModus1)
  // console.log(jumlahModus2)
  // console.log(jumlahModus3)
  // console.log(jumlahModus3 === 0 && jumlahModus2 ===0)
  if(jumlahModus1 === 1){
    return -1
  }
  else if(jumlahModus3 === 0 && jumlahModus2 ===0){
    return -1
  }
  else {
  return angkaModus1
  }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1