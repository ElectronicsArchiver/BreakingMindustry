

module.exports = function(data){
    
    const Bullets = require('Bullet');
    const { assign } = Object;
    
    
    let { turret , ammo } = data;
    
    turret.requirements = ItemStack.with.apply(data.recipe);
    turret.category = data.category;
    
    
    turret = assign(turret,data.specs);
    
    
    if(data.shoot && data.shoot.shots)
        turret.shoot.shots = data.shoot.shots;
    
    
    const bullets = {};

    ammo.map((bullet) => {
            
        const { material , type } = bullet;
        
        delete bullet.material;
        delete bullet.type;
        
        bullets[material] = Bullets[type](bullet);
    });
    
    turret.ammo(bullets);
}