const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let x=document.querySelector("#first");
let y=document.querySelector("#second");

console.log(leng)
function generatepassword(){
    let leng=Number(document.querySelector("#len").value);
    if(leng===0 || leng>15){
        leng=15
    }
    
    console.log(leng)
    let passwords="";
    let num=0;
    for( let i=0;i<leng;i++){
        num=Math.floor(Math.random()*characters.length);
        passwords+=characters[num];
    }
    x.textContent=passwords;
    passwords="";
    for( let i=0;i<leng;i++){
        num=Math.floor(Math.random()*characters.length);
        passwords+=characters[num];
    }
    y.textContent=passwords;

}

