class Dustbin {
    constructor(x,y,width,height){
        var option = {
            isStatic: true
          }
       
       this.body = Bodies.rectangle(x,y,width,height,option)
       this.width = width
       this.height = height

    World.add(world,this.body);
        }
        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            strokeWeight(5);
            stroke("green")
            fill (0);
            rect(pos.x, pos.y, this.width, this.height);  
          }
} 