canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

img_width = 100;
img_height = 200;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	imgTag = new Image(); //defining a variable with a new image
	imgTag.onload = uploadimg; // setting a function, onloading this variable
	imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(imgTag, 50, 70, 400, 200);
}

window.addEventListener("keydown", my_keydown );

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed>=97 && keyPressed<=122)|| (keyPressed>=65 && keyPressed<=90)){
         aplhabetkey();
		 document.getElementById("d1").innerHTML="You pressed an Alphabet Key";
		 console.log("Aplhabet key");

		}

		else if(keyPressed>=48 && keyPressed<=57){
			numberkey();
			document.getElementById("d1").innerHTML="You pressed an Number Key";
			console.log("Number Key");
   
		   }

		   else if(keyPressed>=37 && keyPressed<=40){
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed an Arrow Key";
			console.log("Arrow Key");
   
		   }

		   else if(keyPressed==17 && keyPressed==18 && keyPressed==27){
			specialkey();
			document.getElementById("d1").innerHTML="You pressed an Special Key";
			console.log("Special Key");
   
		   }
		   
		   else
		{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("Other Key");
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
