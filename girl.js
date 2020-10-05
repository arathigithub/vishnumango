class Girl{
constructor(width,height){
this.body=Bodies.rectangle(150,570,width,height);
this.x=150;
this.y=570;
this.width=width;
this.height=height;
this.image=loadImage("e/e/boy.png")
}
display(){
var pos;
pos=this.body.position;
imageMode (CENTER);
image (this.image,pos.x,pos.y,this.width+150,this.height+150);
}
}