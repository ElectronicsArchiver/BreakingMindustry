
const block = 8;


module.exports = {
    
    turret : Blocks.duo ,
    category : Category.production ,

    specs : {
        inaccuracy : 0 ,
        reload : 20 ,
        recoil : 2.5 ,
        shootY : 1 ,
        range : block * 25 ,
        size : 4 
    },
    
    shoot : { 
        shots : 1 
    },
        
    recipe : [
        Items.graphite , 264 ,
        Items.copper   , 375 ,
        Items.lead     , 220
    ],
    
    ammo : [{
        material : Items.copper ,
        lifetime : 55 ,
        damage : 20 ,
        height : 9 ,
        width : 9 ,
        speed : 7 ,
        type : 'basic'
    },{
        reloadMultiplier : 2.5 ,
        material : Items.lead ,
        lifetime : 40 ,
        damage : 22 ,
        height : 7 ,
        width : 6 ,
        speed : 9 ,
        type : 'basic'
    },{
        reloadMultiplier : 0.6 ,
        material : Items.graphite ,
        lifetime : 75 ,
        damage : 28 ,
        height : 9 ,
        width : 9 ,
        speed : 6 ,
        type : 'basic'
    },{
        reloadMultiplier : 1.35 ,
        homingRange : block * 17 ,
        homingPower : 45 ,
        material : Items.silicon ,
        lifetime : 40 ,
        damage : 25 ,
        height : 9 ,
        speed : 9 ,
        width : 9 ,
        type : 'basic'
    }]
}