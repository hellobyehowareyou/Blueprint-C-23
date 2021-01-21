class Box{
constructor(x,y,width,height){
    var options={
        restitution:1.1,
    friction:0.3,
    density:1
    }


    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height-height;
        World.add(world,this.body);
}

display(){
    var tos=this.body.position
    var angle=this.body.angle
    push();
    translate(tos.x,tos.y);
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
}



}