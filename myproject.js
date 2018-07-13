var score,roundscore,activeplayer,gameplay;
init();
//dice=6;
 //var dice = Math.floor(Math.random() * 6) + 1;
 //console.log(dice);
  //document.querySelector('#score-0').textContent = dice;
//document.querySelector('.dice').style.display='none';
//document.getElmentById('dice-2').style.display='none';
/*document.getElementById('roll').addEventListener('click' , function() {
  
var dice = Math.floor(Math.random() * 6) + 1;
var dicedom=document.querySelector('.dice ');
dicedom.style.display='block';
dicedom.src='dice-'+ dice + '.png';
});*/
document.querySelector('.roll_dice').addEventListener('click' , function(){

if(gameplay){
var dice = Math.floor(Math.random() * 6) + 1;
var dicedom=document.querySelector('.dice ');
dicedom.style.display='block';
dicedom.src='dice-'+ dice + '.png';
if(dice !==1)
{
  roundscore += dice;
   document.querySelector('#score-'+activeplayer).textContent = roundscore;
}
else{
    nextplayer();
}}
});
document.querySelector('.Hold').addEventListener('click' , function(){
    if(gameplay){
     score[activeplayer]+=roundscore;
    

    document.querySelector('#s-'+ activeplayer).textContent=score[activeplayer];
     
     if(score[activeplayer]>=50)
     {
        document.querySelector('#p-'+activeplayer).textContent='WINNER';
        document.querySelector('.dice').style.display='none';
        gameplay=false;
     }
     else{
        nextplayer();
     }}
});
function nextplayer()
{

    document.querySelector('#score-' + activeplayer).textContent='0';
  activeplayer===0?activeplayer=1:activeplayer=0;
  roundscore=0; 
  document.querySelector('.dice').style.display='none'; 
}
document.querySelector('.new_game').addEventListener('click' , init)

function init(){
score=[0,0];
roundscore=0;
 activeplayer=0;
 gameplay=true;
 document.querySelector("#score-0").textContent='0';
 document.querySelector("#score-1").textContent='0';
 document.querySelector("#s-0").textContent='0';
 document.querySelector("#s-1").textContent='0';
  document.querySelector("#p-0").textContent='Player-1';
  document.querySelector("#p-1").textContent='Player-2';
  document.querySelector('.dice').style.display='none';

}




