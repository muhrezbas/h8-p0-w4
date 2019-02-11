function angkaPrima(prima) {
  // you can only write your code here!
    if(prima==1 || prima==2 || prima==3 || prima==5 || prima==7){
      return true;
    }else{
      if(prima%2===0||prima%3===0||prima%5===0||prima%7===0){
        return false;
      }else{
        return true
      }
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false