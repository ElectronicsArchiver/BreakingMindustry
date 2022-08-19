(() => {

    let block = 8;

    const turret = Blocks.hail;

    turret.targetGround = true;
    turret.inaccuracy = 5;
    turret.category = Category.production;
    turret.reload = 12.5;
    turret.range = block * 28;
    turret.size = 4;

    turret.requirements = ItemStack.with(Items.copper,1);
    
    
    const copperBullet = bullet({
        lifetime : 80 ,
        height : 8.5 ,
        damage : 12 ,
        width : 8.5 ,
        speed : 8
    })
    
    turret.ammo(
    	Items.copper , copperBullet
    );
    
    
    function bullet(options){
        return extend(BasicBulletType,options);
    }
    
})();
