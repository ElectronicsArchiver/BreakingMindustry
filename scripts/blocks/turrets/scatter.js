
(() => {
    
    
    let block = 8;
    
    
    const requirements = ItemStack.with(
        Items.copper   , 272 ,
        Items.lead     , 295 ,
        Items.graphite , 164
    );
    

    const turret = Blocks.scatter;

    turret.requirements = requirements;
    turret.targetGround = true;
    turret.inaccuracy = 5;
    turret.category = Category.production;
    turret.reload = 12.5;
    turret.recoil = 2.5;
    turret.shootY = 0;
    turret.range = block * 28;
    turret.size = 4;


    const scapBullet = flakBullet({
        collidesGround : true ,
        lifetime : 75 ,
        height : block - 0.75 ,
        damage : 6,
        width : block - 0.75 ,
        speed : 7
    })
    
    const leadBullet = flakBullet({
        reloadMultiplier : 1.5 ,
        collidesGround : true ,
        lifetime : 70 ,
        height : block + 0.5 ,
        damage : 12 ,
        width : block + 0.5 ,
        speed : 7.45
    })
    
    const fragBullet = basicBullet({
        collidesGround : true ,
        despawnEffect : Fx.none ,
        frontColor : Color.white ,
        backColor : Pal.gray ,
        lifetime : 20 ,
        shrinkY : 1 ,
        height : 12 ,
        width : 5
    })
    
    const metaglass = flakBullet({
        collidesGround : true ,
        fragBullets : 6 ,
        fragBullet : fragBullet ,
        lifetime : 70 ,
        height : block + 1.25 ,
        damage : 12 ,
        width : block + 1.25 ,
        speed : 7.45
    })
    
    const siliconBullet = flakBullet({
        reloadMultiplier : 1.2 ,
        homingRange : turret.range ,
        homingPower : 1 ,
        frontColor : Pal.darkishGray ,
        backColor : Pal.darkerMetal ,
        lifetime : 85 ,
        height : block ,
        damage : 17 ,
        width : block ,
        speed : 6.8
    })

    
    turret.ammo(
    	Items.scrap        , scapBullet    ,
    	Items.lead         , leadBullet    ,
    	Items.metaglass    , metaBullet    ,
    	Items.silicon      , siliconBullet
    )
        
    
    function flakBullet(options){
        return extend(FlakBulletType,options);
    }
    
    function basicBullet(options){
        return extend(BasicBulletType,options);
    }
        
})();
