class Bob{
    constructor(x, y, radius, options){
    var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
        }
        
        this.radius = radius;
        radius = 50;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
    }
    display(){
        push();
        var pos =this.body.position;
        fill("white");
        ellipse(pos.x, pos.y, this.radius, this.height);
        pop();
      }
    };
    