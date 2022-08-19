
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
    ],
    
    ammo : [{
        material : Items.copper ,
        lifetime : 55 ,
        damage : 20 ,
        height : 9 ,
        width : 9 ,
        speed : 7 ,
        type : 'basic'
    }]
}