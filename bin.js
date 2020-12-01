class Dustbin{

    constructor (x,y,width,height){
     var options={
         'isStatic':true,
     }
     this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
      //this.image=loadImage("dustbin.png") ;
      this.dbody=Bodies.rectangle(x,y,this.width,this.height,options);
     
      World.add(world,this.dbody);
     

      
      
    }

    display(){

        var pos=this.dbody.position;
        var angle=this.dbody.angle;
         push();
        translate(pos.x,pos.y);
      fill("blue");
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
      
        //imageMode(CENTER);
        //image(this.image,0,0,this.width,this.height); 
        pop();
        
    }

}