

const block = 8;


module.exports = {
    
    turret : Blocks.scorch ,
    category : Category.production ,

    specs : {
        rotateSpeed : 5 ,
        inaccuracy : 0 ,
        targetAir : true ,
        category : Category.production ,
        reload : 4.5 ,
        recoil : 1.5 ,
        size : 4
    },
    
    recipe : [
        Items.silicon , 50  ,
        Items.copper  , 188 ,
        Items.lead    , 142 
    ],
    
    ammo : [{
        material : Items.coal ,
        statusDuration : 60 * 8 ,
        ammoMultiplier : 3 ,
        despawnEffect : Fx.none ,
        keepVelocity : false ,
        shootEffect : Fx.shootSmallFlame ,
        collidesAir : true ,
        hitEffect : Fx.hitFlameSmall ,
        hittable : false ,
        lifetime : 80 ,
        status : StatusEffects.burning ,
        damage : 19.15 ,
        pierce : true ,
        speed : 9 ,
        type : 'raw'
    },{
        material : Items.pyratite ,
        statusDuration : 60 * 17 ,
        ammoMultiplier : 6 ,
        despawnEffect : Fx.none ,
        shootEffect : Fx.shootPyraFlame ,
        collidesAir : true ,
        hitEffect : Fx.hitFlameSmall ,
        hittable : false ,
        lifetime : 80 ,
        status : StatusEffects.burning ,
        damage : 62.5 ,
        pierce : true ,
        speed : 4 ,
        type : 'raw'
    }]
}