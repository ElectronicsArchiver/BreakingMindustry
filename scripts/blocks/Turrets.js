(() => {
    
    const build = require('blocks/TurretBuilder');
    

    const turrets = [
        'Duo' , 'Scatter' , 'Scorch' ,
        'Hail' //, 'Wave' , 'Lancer' ,
        // 'Arc' , 'Parallax' , 'Swarmer' ,
        // 'Salvo' , 'Segment' , 'Tsunami' ,
        // 'Fuse' , 'Ripple' , 'Cyclone' ,
        // 'Foreshadow' , 'Spectre' , 'Meltdown'
    ]

    for(let turret of turrets)
        build(require('blocks/turrets/' + turret));

})();