class Chain {
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
        this.chain =Matter.Constraint.create(option) 
        World.add(world,this.chain)
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(4)
        line (posA.x,posA.y,posB.x,posB.y)
    
    }

}