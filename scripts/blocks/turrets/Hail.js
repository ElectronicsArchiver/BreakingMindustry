

const block = 8;


module.exports = {
    
    turret : Blocks.hail ,
    category : Category.production ,

    specs : {
        targetGround : true ,
        inaccuracy : 5 ,
        reload : 12.5 ,
        range : block * 28 ,
        size : 4
    },
        
    recipe : [ Items.copper , 1 ],
    
    ammo : [{
        material : Items.copper ,
        lifetime : 80 ,
        height : 8.5 ,
        damage : 12 ,
        width : 8.5 ,
        speed : 8 ,
        type : 'basic'
    }]
}