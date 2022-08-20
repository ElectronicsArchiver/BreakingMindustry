
const block = 8;


module.exports = {
    turret : Blocks.wave ,
    category : Category.production ,

    specs : {
        inaccuracy : 0 ,
        reload : 20 ,
        recoil : 2.5 ,
        range : block * 17 ,
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