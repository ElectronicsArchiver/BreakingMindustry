
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
        material : Items.lead ,
        reloadMultiplier : 2.5 ,
        lifetime : 40 ,
        damage : 22 ,
        height : 7 ,
        width : 6 ,
        speed : 9 ,
        type : 'basic'
    },{
        material : Items.graphite ,
        reloadMultiplier : 0.6 ,
        lifetime : 75 ,
        damage : 28 ,
        height : 9 ,
        width : 9 ,
        speed : 6 ,
        type : 'basic'
    },{
        material : Items.silicon ,
        reloadMultiplier : 1.35 ,
        homingRange : block * 17 ,
        homingPower : 45 ,
        lifetime : 40 ,
        damage : 25 ,
        height : 9 ,
        speed : 9 ,
        width : 9 ,
        type : 'basic'
    }]
}