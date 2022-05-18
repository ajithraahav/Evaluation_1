var star = "*";
var space = " ";
var count = 5;
for (var i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    count--;
    console.log(space.repeat(count), star.repeat(i));
  }
}
for (var k = 8; k >= 0; k--) {
  if (k % 2 != 0) {
    count++;
    console.log(space.repeat(count), star.repeat(k));
  }
}
