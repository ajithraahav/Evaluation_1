function num(val) {
  if (val === 1) {
    return `${val} is neither prime nor composite number`;
  } 
  else if (val === 2) {
    return `${val} is prime number`;
  } 
  else {
    for (let i = 2; i <= val - 1; i++) {
      var modulus = val % i;
      console.log(i);
      if (modulus === 0) {
        return  `${val} is not a prime number`;
      }
      if (i == val - 1) {
        return `${val} is prime number`;
      }
    }
  }
}

console.log(num(25));