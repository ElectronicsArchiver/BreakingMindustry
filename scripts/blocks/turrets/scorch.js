
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
        speed: 9,
        damage: 17/2*2.25,
        ammoMultiplier: 3,
        lifetime: 80,
        pierce: true,
        collidesAir: true,
        statusDuration: 60 * 8,
        shootEffect: Fx.shootSmallFlame,
        hitEffect: Fx.hitFlameSmall,
        despawnEffect: Fx.none,
        status: StatusEffects.burning,
        keepVelocity: false,
        hittable: false
    })
    
    const pyratiteBullet = bullet({
        speed: 4,
        damage: 60/3*3.125,
        ammoMultiplier: 6,
        lifetime: 80,
        pierce: true,
        collidesAir: true,
        statusDuration: 60 * 17,
        shootEffect: Fx.shootPyraFlame,
        hitEffect: Fx.hitFlameSmall,
        despawnEffect: Fx.none,
        status: StatusEffects.burning,
        hittable: false
    })
    
    turret.ammo(
    	Items.coal     , coalBullet
    	Items.pyratite , pyratiteBullet
    );


    function bullet(options){
        return extend(BulletType,options);
    }
    
})();
