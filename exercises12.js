function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  var dataBarang = []
  

  for(var i = 0; i<listBarang.length; i++ ){
    var tempObj = {}
    tempObj["product"] = listBarang[i][0]
    tempObj["shoppers"] = []
    tempObj["leftOvers"] = listBarang[i][2]
    tempObj["totalProfit"] = 0
    
    dataBarang.push(tempObj)



  }
     
  for(i = 0; i<shoppers.length; i++){
    for(j = 0; j<dataBarang.length; j++){
      if(dataBarang[j].product === shoppers[i].product){
        if(dataBarang[j].leftOvers >= shoppers[i].amount){
          switch(dataBarang[j].product) {
                  case "Sepatu Stacattu":   {
                    profit =1500000; 
                    break; }
                  case "Baju Zoro":   { 
                    profit =500000; 
                  break; }
                  case "Sweater Uniklooh":   { 
                    profit =175000; 
                    break; }
                }
          dataBarang[j].shoppers.push(shoppers[i].name)
          dataBarang[j].leftOvers -= shoppers[i].amount
          dataBarang[j].totalProfit += profit * shoppers[i].amount 
        }
      }
  
      
    }
  }
  return dataBarang
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
[ { product: 'Sepatu Stacattu',
  shoppers: [ 'Windi', 'Vanessa' ],
  leftOver: 5,
  totalProfit: 7500000 },
{ product: 'Baju Zoro',
  shoppers: [],
  leftOver: 2,
  totalProfit: 0 },
{ product: 'Sweater Uniklooh',
  shoppers: [],
  leftOver: 1,
  totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]