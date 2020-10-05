class Tree{
constructor(width,height){
var options={
isStatic:true,
}
this.body=Bodies.rectangle(550,400,width,height,options);
this.x=550;
this.y=400;
this.width=width;
this.height=height;
this.image=loadImage("images/tree.png")
World.add(world, this.body);
}
display(){
var pos=this.body.position;
imageMode(CENTER);
image (this.image,pos.x,pos.y,this.width+450,this.height+450);
}
}