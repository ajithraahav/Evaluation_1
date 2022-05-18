function palindrome(text){
   var splited = text.split("");
   var reversed =splited.reverse();   
   var joined =reversed.join("");

   if(text==joined){
       return `${text} - is a palindrome`;
   }
   else{
       return `${text} - is not a palindrome`;
   }
}
console.log(palindrome("abaa"));
