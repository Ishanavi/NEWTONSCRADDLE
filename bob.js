class Bob
{
    constructor(x,y,r)
    {
        var options = 
        {
            'isStatic' : false,
            'restitution' : 0,
            'friction' : 0,
            'density' : 0.3
        }
       
      
       this.x = x
       this.y = y
       this.r = r
       this.body = Bodies.circle(this.x,this.y,(this.r)/2-10,options)
        World.add(world,this.body)
    }
    display()
    {
      var pos = this.body.position
      push()
      fill(255,117,117)
      translate(pos.x,pos.y)
      ellipseMode(CENTER)
      ellipse(0,0,this.r)
      pop();

    }
}

