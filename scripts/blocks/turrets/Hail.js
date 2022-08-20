

const block = 8;


module.exports = {
    
    turret : Blocks.hail ,
    category : Category.production ,

    specs : {
        targetGround : true ,
        inaccuracy : 5 ,
        reload : 75.35 ,
        range : block * 35 ,
        size : 4
    },
        
    recipe : [ 
        Items.copper , 234,
        Items.lead , 85,
        Items.graphite, 76
    ],
    
    ammo : [{
        material : Items.graphite ,
        type : 'artillery',
        speed : 5, 
        damage : 20,
        knockback : 0.8,
        lifetime : 80,
        width : 11,
        height: 11,
        collidesTiles : false,
        splashDamageRadius: 25 * 0.85,
        splashDamage: 72
    },{
        material : Items.silicon ,
        type : 'artillery',
        speed : 3, 
        damage : 20,
        knockback : 0.8,
        lifetime : 80,
        width : 11,
        height : 11,
        collidesTiles : false,
        splashDamageRadius : 25 * 0.85,
        splashDamage : 80,
        reloadMultiplier : 1.2,
        ammoMultiplier : 3,
        homingPower : 0.04,
        homingRange : 50
    },{
        material : Items.pyratite ,
        type : 'artillery',
        speed : 5, 
        damage : 25,
        knockback : 0.8,
        lifetime : 80,
        width : 13,
        height: 13,
        collidesTiles : false,
        splashDamageRadius: 25 * 0.85,
        splashDamage: 76,
        status : StatusEffects.burning,
        statusDuration : 60 * 8,
        frontColor : Pal.lightishOrange,
        backColor : Pal.lightOrange,
        makeFire : true,
        trailEffect : Fx.incendTrail,
        ammoMultiplier : 4
    }]*
}
