

const block = 8;


module.exports = {
    
    turret : Blocks.hail ,
    category : Category.production ,

    specs : {
        inaccuracy : 12 , // don't ask
        reload : 75.35 ,
        range : block * 35 ,
        recoil: 1.5 ,
        size : 4
    },
        
    recipe : [ 
        Items.graphite , 76  ,
        Items.copper   , 234 ,
        Items.lead     , 85
    ],
    
    ammo : [{
        splashDamageRadius : 25 * 0.85 ,
        collidesTiles : false ,
        splashDamage : 72 ,
        knockback : 0.8 ,
        material : Items.graphite ,
        lifetime : 80 ,
        damage : 20 ,
        width : 11 ,
        height: 11 ,
        speed : 5 , 
        type : 'artillery'
    },{
        splashDamageRadius : 25 * 0.85 ,
        reloadMultiplier : 1.2 ,
        ammoMultiplier : 3 ,
        collidesTiles : false ,
        splashDamage : 80 ,
        homingPower : 0.04 ,
        homingRange : 50 ,
        knockback : 0.8 ,
        material : Items.silicon ,
        lifetime : 80,
        height : 11 ,
        damage : 20 ,
        width : 11 ,
        speed : 3 , 
        type : 'artillery'
    },{
        splashDamageRadius: 25 * 0.85 ,
        statusDuration : 60 * 8 ,
        ammoMultiplier : 4 ,
        collidesTiles : false ,
        splashDamage: 76 ,
        trailEffect : Fx.incendTrail ,
        frontColor : Pal.lightishOrange ,
        backColor : Pal.lightOrange ,
        knockback : 0.8 ,
        material : Items.pyratite ,
        makeFire : true ,
        lifetime : 80 ,
        status : StatusEffects.burning ,
        damage : 25 ,
        width : 13 ,
        height: 13 ,
        speed : 5 ,  
        type : 'artillery' ,
    }]
}