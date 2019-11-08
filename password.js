document.getElementById("Generate").addEventListener("click",function(){
    var num1 = ["0","1","2","3","4","5","6","7","8","9"];
    var length1 = prompt("Choose length of password 8-128?");
    //var symbols = prompt("Do you want to use symbols? Yes or No?");
    var finalPass ="";
    //var letters = prompt("Do you want to use letters?");
    if(length1<8 || length1>128){
        alert("enter numbers between 8-128");
    }
    else{
        for(var i=0; i <= length1; i++);
        finalPass= finalPass+ Math.floor(Math.random()* Math.floor(num1.length-1));
        //console.log(finalPass);
    }
    /* if(symbols ==="Yes"){
        pass2 = Math.floor(Math.random()*symbolPass.length);
        pass3 = symbolPass[pass2]
        console.log(pass3);
    }*/
    console.log(finalPass);
    //write function to combine password and use length user is asking.
    
    
}
);
function getSymbols(){
    var symbolEl = ["~","!","#","$","%"];
    return symbolEl[Math.floor(Math.random()*symbolEl.length)];
}
function getRandomNum(){
    return Math.floor(Math.random()*10);
}
function getLowerCase(){
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}
console.log(getLowerCase());
