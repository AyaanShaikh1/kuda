class paper {
 constructor(x,y,radius) {

    var options = {
        'isStatic': false,
        'restitution': 0.3,
        'friction':0,
        'density': 1.2
    }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius
      this.image = loadImage("kudaa/kudaa.bmp");
      
    World.add(world,this.body);
 } 
   display(){ 
    var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
  
    pop();


   }

}