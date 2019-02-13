function urutkanAbjad(str) {
  // you can only write your code here!
  var temp = ""
  var str = str.split("")
     for(var i=0;i<str.length;i++) {
      for(var j=0;j<str.length-i;j++) {
        if(str[j]>str[j+1]) {
          temp = str[j]
          str[j] = str[j+1]
          str[j+1]=temp
        }
      }
    }
    return str.join("")
  
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'