/*class Rope{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Matter.Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}*/
class Rope{
constructor(bodyA,pointB){

var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:10
}
this.rope=Matter.Constraint.create(options)
World.add(world,this.rope);
this.bodyA=this.rope.bodyA;
this.pointB=pointB;
}
fly(){
this.rope.bodyA=null; 

}
display(){
    console.log(this.rope);
if(this.rope.bodyA){
var pos=this.rope.bodyA.position;
var point=this.pointB;
line (pos.x,pos.y,point.x,point.y)
}
}
}