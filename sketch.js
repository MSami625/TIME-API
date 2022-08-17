const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var hour;
var minutes;
var ip;
var seconds;
var bg = "sunrise1.png"
function preload() {
     getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1550,760);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here

    fill("darkblue");
    textSize(30);
    textFont('Courier New');
    stroke(10);
    
    
if(hour>=12){
    text("TIME : "+hour%12+minutes+seconds+" PM.",50,150);
}else if(hour==0){
    text("TIME : 12 "+minutes+seconds+" AM.",100,150);
}else{
    text("TIME : "+hour%12+minutes+seconds+" AM.",50,150);
}

     fill("black");
     textSize(20);
text("Your t.IPv6 Address is : (" +ip+ ".)",50,600);

}

async function getBackgroundImg(){


        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        hour = datetime.slice(11,13);
        minutes = datetime.slice(13,16);
        seconds= datetime.slice(16,19)
    
        var client_ip=responseJSON.client_ip;
         ip=client_ip;

   

        console.log(hour+minutes);
        
        
        if(hour>=04 && hour<=06 )
        { bg = "sunrise1.png"; }
        else if(hour>=06 && hour<=08 )
        { bg = "sunrise2.png"; }
        else if(hour>=08 && hour<=11 )
        { bg = "sunrise3.png"; }
        else if(hour>=11 && hour<=13)
        { bg = "sunrise4.png"; }
        else if(hour>=13 && hour<=15)
        { bg = "sunrise5.png"; }
        else if(hour>=15 && hour<=17 )
        { bg = "sunrise6.png"; }
        else if(hour>=17 && hour<=18 )
        { bg = "sunset7.png"; }
        else if(hour>=18 && hour<=20 )
        { bg = "sunset8.png"; }
        else if(hour>=20 && hour<=23 )
        { bg = "sunset9.png"; }
        else if(hour>=23 && hour==0)
        { bg = "sunset10.png"; }
        else if(hour==0 && hour<=03)
        { bg = "sunset11.png"; }
        else{ bg = "sunset12.png"; } 
        backgroundImg=loadImage(bg);
}

    

 
