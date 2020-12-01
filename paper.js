class paper{
    constructor(x,y,r){
       var options={
           'isStatic':false,
           'restitution':0.4,
            'density':1.2,
            'friction':0.4,
        
       }
       
       
       
        this.x=x;
        this.y=y;
        this.r=r;
       
       this.body=Bodies.circle(this.x,this.y,this.r-40,options);
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
         push();
        translate(pos.x,pos.y);
      rotate(angle);
       fill("pink");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r); 
        pop();
    }

};