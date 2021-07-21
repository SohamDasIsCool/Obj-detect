img="";
//img holds image
status="";
//status is true/false
objects=[];
//array
function preload(){
img=loadImage("carr.jpg");
//loading image...
 }
function setup(){
    canvas=createCanvas(650,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("CocoSSD is initialized");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
console.error(error);
    }
    else{
console.log(results);
objects=results;
    }
}
function draw(){
    image(img,0,0,650,400);
    if(status!=""){
      for (i= 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML="Staus:Object Detected!";
          fill('#FF0000');
          percent= Math.floor(objects[i].confidence*100);
          text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
          noFill();
          stroke('#00CCEA');
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      }
    }
}