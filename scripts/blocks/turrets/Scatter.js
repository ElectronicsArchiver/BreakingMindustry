
(() => {
    
    const Bullet = require('Bullet');


    const 
        block = 8 ,
        range = block * 28 ;

    const fragBullet = Bullet.basic({
        collidesGround : true ,
        despawnEffect : Fx.none ,
        frontColor : Color.white ,
        backColor : Pal.gray ,
        lifetime : 20 ,
        shrinkY : 1 ,
        height : 12 ,
        width : 5
    })


    module.exports = {
        
        turret : Blocks.scatter ,
        category : Category.production ,

        specs : {
            targetGround : true ,
            inaccuracy : 5 ,
            reload : 12.5 ,
            recoil : 2.5 ,
            shootY : 0 ,
            range : range ,
            size : 4
        },
            
        recipe : [
            Items.graphite , 164 ,
            Items.copper   , 272 ,
            Items.lead     , 295
        ],
        
        ammo : [{
            collidesGround : true ,
            material : Items.scrap ,
            lifetime : 75 ,
            height : block - 0.75 ,
            damage : 6,
            width : block - 0.75 ,
            speed : 7 ,
            type : 'flak'
        },{
            reloadMultiplier : 1.5 ,
            collidesGround : true ,
            material : Items.lead ,
            lifetime : 70 ,
            height : block + 0.5 ,
            damage : 12 ,
            width : block + 0.5 ,
            speed : 7.45 ,
            type : 'flak'
        },{
            collidesGround : true ,
            fragBullets : 6 ,
            fragBullet : fragBullet ,
            material : Items.metaglass ,
            lifetime : 70 ,
            height : block + 1.25 ,
            damage : 12 ,
            width : block + 1.25 ,
            speed : 7.45 ,
            type : 'flak'
        },{
            reloadMultiplier : 1.2 ,
            homingRange : range ,
            homingPower : 1 ,
            frontColor : Pal.darkishGray ,
            backColor : Pal.darkerMetal ,
            material : Items.silicon ,
            lifetime : 85 ,
            height : block ,
            damage : 17 ,
            width : block ,
            speed : 6.8 ,
            type : 'flak'
        }]
    }
    
})()