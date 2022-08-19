
(() => {
    
    let block = 8;
    
    
    const requirements = ItemStack.with(
        Items.copper  , 188 ,
        Items.lead    , 142 ,
        Items.silicon , 50
    );
    
    const turret = Blocks.scorch;

    turret.requirements = requirements;
    turret.rotateSpeed = 5;
    turret.inaccuracy = 0;
    turret.targetAir = true;
    turret.category = Category.production;
    turret.reload = 4.5;
    turret.recoil = 1.5;
    turret.size = 4;
    
    
    const coalBullet = bullet({
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
        damage : 17 / 2 * 2.25 ,
        pierce : true ,
        speed : 9
    })
    
    const pyratiteBullet = bullet({
        statusDuration : 60 * 17 ,
        ammoMultiplier : 6 ,
        despawnEffect : Fx.none ,
        shootEffect : Fx.shootPyraFlame ,
        collidesAir : true ,
        hitEffect : Fx.hitFlameSmall ,
        hittable : false ,
        lifetime : 80 ,
        status : StatusEffects.burning ,
        damage : 60 / 3 * 3.125 ,
        pierce : true ,
        speed : 4
    })
    
    turret.ammo(
    	Items.coal     , coalBullet
    	Items.pyratite , pyratiteBullet
    );


    function bullet(options){
        return extend(BulletType,options);
    }
    
})();
