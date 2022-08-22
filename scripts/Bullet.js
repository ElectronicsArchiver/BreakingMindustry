
module.exports = {
    
    artillery : (options) =>
        extend(ArtilleryBulletType,options) ,
    
    liquid : (options) =>
        extend(LiquidBulletType,options) ,
    
    basic : (options) =>
        extend(BasicBulletType,options) ,
        
    flak : (options) =>
        extend(FlakBulletType,options) ,
        
    raw : (options) =>
        extend(BulletType,options)
}