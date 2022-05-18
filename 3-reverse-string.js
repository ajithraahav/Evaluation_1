function reverse(text) {
    var splited = text.split("");
    var reversed =splited.reverse();   
    var joined =reversed.join("");

    return `${text} - original string \n${joined} - reversed string`;
}
console.log(reverse("string"));
