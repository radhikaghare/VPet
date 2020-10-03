var foodStock
 var foodS
var database
var dog 
var doghappy
var dogimg , doghappyimg

function preload(){

dogimg=loadImage("images/dogImg.png")
doghappyimg=loadImage("images/dogImg1.png")
}

function setup(){
  database = firebase.database()
  dog=createSprite(250,250)
  //dog.addimage("dog",dogimg)
 //loadimage , I is be capital
 dog.addImage("dog",dogimg)
 dog.scale = 0.15
  foodStock= database.ref('Food');
  foodStock.on("value",readstock);  
}


function draw() {  
  background(46,139,87)

//if(keywentdown(UP_ARROW)){
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage =("doghappy",doghappyimg) 
} 
  drawSprites();
 // Text("foodStock")
 //corrected: text, t is small

 fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

  //textsize()

}
function readstock(data){
  foodS = data.val();

  // Ending } needs to be added
}
//Correct syntax for function is function name then {}, no semicolon is needed
  //function writeStock(x);
  function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


