class Ground{
constructor(width,height){
this.body=Bodies.rectangle(200,500,width,height);
this.x=200;
this.y=500;
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
var pos;
pos=this.body.position;
rect(400,800,this.width,this.height);
}
}