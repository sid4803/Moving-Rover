/*canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
backgroundimg="mars.jpg";
roverimg="rover.png";
roverx=10;
rovery=10;
function add(){
    bimg=new Image();
    bimg.onload=uploadbackground;
    bimg.src=backgroundimg;
    rimg=new Image();
    rimg.onload=uploadrover;
    rimg.src=roverimg;
}
function uploadbackground(){
    ctx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverimg,roverx,rovery,roverwidth,roverheight);
}
*/
images=["nasa1.jpg","nasa 3.jpg","nasa 5.jpg","nasa 7.jpg"];
random_number=Math.floor(Math.random()*4)
canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
  rover_width = 100;
   rover_height = 90;
    background_image = images[random_number];
     rover_image = "rover.png"; rover_x = 10; rover_y = 10;
      function add() { background_imgTag = new Image();
         //defining a variable with a new image
          background_imgTag.onload = uploadBackground;
           // setting a function, onloading this variable
            background_imgTag.src = background_image;
             // load image
              rover_imgTag = new Image();
               //defining a variable with a new image
                rover_imgTag.onload = uploadrover;
                 // setting a function, onloading this variable
                  rover_imgTag.src = rover_image;
                   // load image
                 } function uploadBackground()
                  { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); }
                   function uploadrover() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); }
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=="38"){
    up();
    console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
        }
        if(keyPressed=="37"){
            left();
            console.log("left");
            }
            if(keyPressed=="39"){
                right();
                console.log("right");
                }
}