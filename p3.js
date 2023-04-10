const h11=document.getElementById('fs');
const h12=document.getElementById('ss');
const buttongreen=document.querySelector('.red');
const buttonblue=document.querySelector('.blue');
const buttonreset=document.querySelector('.green');
const winningscoreselect=document.querySelector('#playto');
let winningscore;
let gameover=false;
//h11.innerHTML=0; h12.innerHTML=0;
buttongreen.addEventListener("click",myFunction);
//let winningscore=6; h11.innerHTML=0; h12.innerHTML=0;
i=0;
function myFunction()
{
 // if(h11.innerHTML !== winningscore){
 // h11.innerHTML=++i;
 // }
 if(!gameover){
    h11.innerHTML=++i;
   
  if(i===winningscore)
  {
    //else{
   //  h11.innerHTML=++i;
 // }
    h11.style.color="green";
    buttongreen.disabled=true;
   // h11.style.color="green";
    gameover=true;
  }
 // else{
  //   h11.innerHTML=++i;
 // }
 }
}

buttonblue.addEventListener("click",mymymyFunction);
j=0;
function mymymyFunction()
{
 // if(h12.innerHTML !==winningscore){
 if(!gameover){
   h12.innerHTML=++j;
    if(j===winningscore)
      {
        buttonblue.disabled=true;
        h12.style.color="green";
        gameover=true;
      }
    //else
    //  {
 // h12.innerHTML=++j;
    //  }
}
}

winningscoreselect.addEventListener('change',function(){
  winningscore=parseInt(this.value);
  mymyFunction();
})


buttonreset.addEventListener("click",mymyFunction);
function mymyFunction()
{
  h11.innerHTML=0;
   h12.innerHTML=0;
  i=0;
  j=0;
 buttongreen.disabled=false;
  buttonblue.disabled=false;
   h11.style.color="black";
   h12.style.color="black";
  gameover=false;
}
