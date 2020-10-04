
let a=0;
let cmd=0;


a=getRandomInt(10);
function getRandomInt(max) {

    return Math.floor(Math.random() * Math.floor(max));
  }
 let x=0;
 
     
for(x=0;x<3;x++){
     cmd = prompt("Choose a number between 1 to 10  ");
   

    if(cmd<a && cmd<=10){
     alert("Correct ans is greater !");
    
    }
    else if(cmd>a && cmd<=10){
        alert(" Correct answer is smaller !");
    }
    else if(cmd==a){
        alert("You win");
    }
    else if(cmd>10){
        alert("please enter a number between 1 to 10");
    }
    
}
if(cmd!=a) {
    alert("you lose !");

}




