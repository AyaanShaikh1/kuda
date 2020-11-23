class dustbin {
    constructor(x,y) {
        var options = {
            isStatic :true
        } 
        this.dwidth = 200;
        this.dheight = 210;
        this.wallthick = 20;
        this.bottombody = Bodies.rectangle(x,y,this.dwidth,this.dheight,options);
        this.leftbody = Bodies.rectangle(x-this.dwidth/2,y-this.dheight/2,this.wallthick,this.dheight,options);
        this.rightbody = Bodies.rectangle(x+this.dwidth/2,y-this.dheight/2,this.wallthick,this.dheight,options);
               
        World.add(world,this.bottombody);
        World.add(world,this.leftbody);
        World.add(world,this.rightbody);
        this.image = loadImage("kudaa/dustbingreen.bmp");

    }
    display(){
    var locb = this.bottombody.position;
    var locl = this.leftbody.position;
    var locr = this.rightbody.position;
    push();    
    translate(locb.x,locb.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
       
    push();    
    translate(locl.x,locl.y);
    rectMode(CENTER);
    rotate(this.angle);
    pop();

    push();    
    translate(locr.x,locr.y);
    rectMode(CENTER);
    rotate(-this.angle);
    pop();
    }
  
    




}
