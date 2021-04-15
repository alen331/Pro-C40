const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
    
}

function setup(){
   
 canvas=  createCanvas(500,650);

    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
     background("black");

    Engine.update(engine);
}   

