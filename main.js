canvas = new fabric.Canvas('myCanvas');

 blockY=1;
 blockX=1;

blockImageWidth = 175;
blockImageHeight = 215;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
		blockImageObject = Img;

		blockImageObject.scaleToWidth(blockImageHeight)
		blockImageObject.scaleToWidth(blockImageWidth)
		blockImageObject.set({
			top:blockY,
			left:blockX
		});
		canvas.add(blockImageObject)
		})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '80')
	{
		newImage('rr.png');
		console.log('p');
	}
	if(keyPressed == '65')
	{
		blockX = 200;
		newImage('gr.png');
		console.log('e');
	}
	
	if(keyPressed == '68')
	{
		blockX = 300;
		newImage('br.png');
		console.log('d');
	}
	if(keyPressed == '82')
	{
		blockX = 500;
		newImage('pr.png');
		console.log('r');
	}
	if(keyPressed == '79')
	{
		blockX = 600;
		newImage('yr.png');
		console.log('o');
	}
	
}

