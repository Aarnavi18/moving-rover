canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_images=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number=Math.floor(Math.random()*5);
rover_width=100;
rover_height=90;
roverx=10;
rovery=10;
rover_image="rover.png";
background_image=mars_images[random_number];

function add()
{
    bg_image=new Image();
    bg_image.onload=uploadBackground;
    bg_image.src=background_image;

    
    rr_image=new Image();
    rr_image.onload=uploadrover;
    rr_image.src=rover_image;
}

function uploadBackground()
{
    ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rr_image,roverx,rovery,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)

{
    keypress=e.keyCode;
    if(keypress=='38')
    {
        up();
        console.log("up")
    }
    if(keypress=='40')
    {
        down();
        console.log("down")
    }
    if(keypress=='37')
    {
        left();
        console.log("left")
    }
    if(keypress=='39')
    {
        right();
        console.log("right")
    }
}
function up()
{
    if(rovery>=0)
    {
        rovery=rovery-10;
        console.log("when up arrow is pressed-"+"y="+rovery);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rovery<=500)
    {
        rovery=rovery+10;
        console.log("when down arrow is pressed-"+"y="+rovery);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(roverx>=0)
    {
        roverx=roverx-10;
        console.log("when left arrow is pressed-"+"x="+roverx);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(roverx<=700)
    {
        roverx=roverx+10;
        console.log("when right arrow is pressed-"+"x="+roverx);
        uploadBackground();
        uploadrover();
    }
}

