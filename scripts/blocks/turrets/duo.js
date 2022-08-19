

(() => {
    
    const { basicBullet } = require('Bullet');
    
    
    const block = 8;
    
    
    const copperBullet = basicBullet({
        lifetime : 55 ,
        damage : 20 ,
        height : 9 ,
        width : 9 ,
        speed : 7
    })
    
    const leadBullet = basicBullet({
        reloadMultiplier : 2.5 ,
        lifetime : 40 ,
        damage : 22 ,
        height : 7 ,
        width : 6 ,
        speed : 9
    })
    
    const graphiteBullet = basicBullet({
        reloadMultiplier : 0.6 ,
        lifetime : 75 ,
        damage : 28 ,
        height : 9 ,
        width : 9 ,
        speed : 6
    })
    
    const siliconBullet = basicBullet({
        reloadMultiplier : 1.35 ,
        homingRange : block * 17 ,
        homingPower : 45 ,
        lifetime : 40 ,
        damage : 25 ,
        height : 9 ,
        speed : 9 ,
        width : 9
    })
    
    const requirements = ItemStack.with(
        Items.copper   , 375 ,
        Items.lead     , 220 ,
        Items.graphite , 264
    );
    
    
    
    const turret = Blocks.duo;
    
    turret.requirements = requirements;
    turret.inaccuracy = 0;
    turret.category = Category.production;
    turret.reload = 20;
    turret.recoil = 2.5;
    turret.shootY = 1;
    turret.shoot.shots = 1;
    turret.range = block * 25;
    turret.size = 4;
    
    turret.ammo(
    	Items.copper   , copperBullet   ,
    	Items.lead     , leadBullet     ,
    	Items.graphite , graphiteBullet ,
    	Items.silicon  , siliconBullet
    );
    
})();