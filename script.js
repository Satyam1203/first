// JavaScript Document 
document.bgColor="rgb(20,20,20)"; 
var a=10; 
var clr="blue"; 
var bool=true; 
window.alert("Click when colour of block is " + clr); 
function toggle(){
setInterval(function() {
	if(bool == true)
		{ 
		bool=false;
		document.getElementById('chng').style.background="red"; 
		}
	
	else{ 
		bool=true;
		document.getElementById('chng').style.background="blue"; 
		}
	},500); 
}
	 
var score=5;
function func(){
	if(document.getElementById('chng').style.background == "blue")
	{	
		score++;
		document.getElementById('points').innerHTML=score; 
		if (score==10)
		document.getElementById('res').innerHTML=("You win !!");
	}
	if(document.getElementById('chng').style.background == "red")
	{ 
		score--;
		document.getElementById('points').innerHTML=score; 
		if(score==0)
		document.getElementById('res').innerHTML=("You lose, try again");
	} 
}
	
	