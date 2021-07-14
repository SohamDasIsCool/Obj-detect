img="";
function preload(){
img=loadImage("bed.jpg");
}
function setup(){
    canvas=createCanvas(500,350);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("CocoSSD is initialized");
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
console.error(error);
    }
    else{
console.log(results);
    }
}
function draw(){
    image(img,0,0,500,350);
    fill('#FF0000');
    stroke('#FF0000');
    text("Bed",135,155);
    noFill();
    rect(130,140,270,210);

}