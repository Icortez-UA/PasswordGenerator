document.getElementById("Generate").addEventListener("click",function(){
    var passwordEl = document.getElementById('password');
    var length1 = +prompt("Choose length of password 8-128?");
    var num1 = confirm("Do you want to use numbers?")
    var symbols = confirm("Do you want to use symbols?");
    var upperCaseLetters = confirm("Do you want to use upper case letters?");
    var lowerCaseLetters = confirm("Do you want to use lower case letters?");
    finalPass=""; 
    if(num1,symbols,upperCaseLetters,lowerCaseLetters==true){
        for(i=0; i< length1; i++){
            finalPass= finalPass+getLowerCase()+getRandomNum()+getSymbols()+getUpperCase();
        }
    }
    // Password generator function?
    
    
    // console log test output
    var ultraFinal= finalPass.slice(0,length1);
    console.log(ultraFinal);

    // functions to get random values
        function getRandomNum(){
           return Math.floor(Math.random()*10);
        }
        function getLowerCase(){
           var lowerCase2 = "abcdefghijklmnopqrstuvwxyz";
           return lowerCase2[Math.floor(Math.random()*lowerCase2.length)];
        }
        function getUpperCase(){
           var upperCase2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
           return upperCase2[Math.floor(Math.random()*upperCase2.length)];
        }
        function getSymbols(){
           var symbol2 = ["~","!","#","$","%"];
           return symbol2[Math.floor(Math.random()*symbol2.length)];
        }
}
);
