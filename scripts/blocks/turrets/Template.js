
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
        size : 3
    },
    
    shoot : { 
        shots : 1 
    },
        
    recipe : [
        Items.copper, 1 ,
    ],
    
    ammo : [{
        material : Items.copper ,
        lifetime : 80 ,
        damage : 20 ,
        height : 9 ,
        width : 9 ,
        speed : 5 ,
        type : 'basic'
    }]
}