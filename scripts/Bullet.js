
module.exports = {
    
    flakBullet : (options) =>
        extend(FlakBulletType,options) ,
        
    basicBullet : (options) =>
        extend(BasicBulletType,options) ,
        
    rawBullet : (options) =>
        extend(BulletType,options)
}