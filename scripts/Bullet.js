
module.exports = {
    
    artillery : (options) =>
        extend(ArtilleryBulletType,options) ,
    
    flak : (options) =>
        extend(FlakBulletType,options) ,
        
    basic : (options) =>
        extend(BasicBulletType,options) ,
        
    raw : (options) =>
        extend(BulletType,options)
}
