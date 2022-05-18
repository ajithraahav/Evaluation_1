function reverse(sentence) {
  var splited = sentence.split(" ");
  var reversed = splited.reverse();
  var joined = reversed.join(" ");

  return `${sentence} - original sentence \n${joined} - reversed sentence`;
}
console.log(reverse("How is your day"));
