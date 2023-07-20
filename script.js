var ran = random(100);
var initialvalue=100;
var highscore1=null;
console.log(ran);

function gameload()
{
       initialvalue=100;
       document.body.style.backgroundColor = "pink"
       document.querySelector('.score').textContent = initialvalue
       document.querySelector('.Number').textContent = '?'
       document.getElementById('gussid').value = ''
       document.querySelector("#message").textContent = 'Start Guessing...'
       ran = random(100);
       console.log(ran)
   
}

function random(n)
{
    return Math.floor(Math.random()*n)+1;
}
function checkup()
{
let inputnumber = document.querySelector("#gussid").value
console.log(inputnumber)
if(initialvalue !==0)
{
if(inputnumber > ran)
{
    document.querySelector("#message").innerText="Your Guess is High"
    initialvalue--
    document.querySelector(".score").
    innerHTML=initialvalue
}
else if(inputnumber < ran)
{
    document.querySelector("#message").innerText="your Guess is Low"
    initialvalue--
    document.querySelector(".score").innerHTML=initialvalue
}
else{
   document.body.style.backgroundColor ="pink";
   document.querySelector("#message").innerHTML="Hurry you Win";
   document.querySelector(".score").innerHTML = --initialvalue;
   document.querySelector(".highscore1").innerHTML=initialvalue;

//    document.querySelector(".refresh").style.visibility ="hidden"
   document.querySelector(".Number").innerText=inputnumber;
}
}
else{
    document.querySelector("#message").innerHTML = "gameover";
}
}


