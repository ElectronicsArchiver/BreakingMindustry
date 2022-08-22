
const block = 8;


module.exports = {
    
    turret : Blocks.wave ,
    category : Category.production ,

    specs : {
        scaledHealth : 250 * 1.5 ,
        inaccuracy : 3 ,
        reload : 2.25 ,
        recoil : 0.5 ,
        range : block * 16 ,
        size : 3
    },
    
    recipe : [
        Items.metaglass , 65  ,
        Items.copper    , 125 ,
        Items.lead      , 160 
    ],
    
    ammo : [{
        knockback : 0.7 ,
        material : Liquids.water ,
        liquid : Liquids.water ,
        layer : Layer.bullet - 2 ,
        type : 'liquid' ,
        drag : 0.01 
    },{
        knockback : 0.7 ,
        material : Liquids.slag ,
        liquid : Liquids.slag ,
        damage : 4 ,
        type : 'liquid' ,
        drag : 0.01 
    },{
        material : Liquids.cryofluid ,
        liquid : Liquids.cryofluid ,
        type : 'liquid' ,
        drag : 0.01
    },{
        material : Liquids.oil ,
        liquid : Liquids.oil ,
        layer : Layer.bullet - 2 ,
        type : 'liquid' ,
        drag : 0.01
    }]
}