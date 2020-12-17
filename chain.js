class Chain 
{
    constructor(body1,body2,offsetX,offsetY)
    {
       this.offsetX = offsetX
       this.offsetY = offsetY

        var options =
        {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.09,
            length:250
        }

        this.chain = Constraint.create(options)
        
        World.add(world,this.chain)
    }

    display()
    {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(2);
        stroke("black")
        fill(255,96,117)
        var A1 = pointA.x
        var A2 = pointA.y
        var B1 = pointB.x+this.offsetX
        var B2 = pointB.y+this.offsetY
        line(A1,A2,B1,B2)
    }
}

