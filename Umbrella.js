class Umbrella{
    constructor(x,y,width,height){
      var options={
          isStatic=true,
      }
      this.body=Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.height=height;
      this.image=loadImage("Images/Walking Frame/walking-1.png,walking-2.png,walking-3.png,walking-4.png,walking-5.png,walking-6.png,walking-7.png,walking-8.png,");
      World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,0,0,width,height);
    }
}