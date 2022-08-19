(() => {
    const turrets = [
	'duo' ,	'scatter' , 'scorch' ,
	'hail' //, 'wave' , 'lancer' ,
    	// 'arc' , 'parallax' , 'swarmer' ,
    	// 'salvo' , 'segment' , 'tsunami' ,
    	// 'fuse' , 'ripple' , 'cyclone' ,
    	// 'foreshadow' , 'spectre' , 'meltdown'
    ]

    for(let turret of turrets)
        require('blocks/turrets/' + turret);
})();
