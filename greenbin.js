class Greenbin {
    constructor(x,y,width,height){
        var option = {
            isStatic: false
          }
       
       this.body = Bodies.rectangle(x,y,width,height,option)
       this.width = width
       this.height = height
       this.image = loadImage("dustbingreen.png")

    World.add(world,this.body);
        }
        display(){
            var pos = this.body.position;
            translate(pos.x,pos.y)
            imageMode(CENTER)
            image(this.image,0,0,100,110);
          }
    
} 