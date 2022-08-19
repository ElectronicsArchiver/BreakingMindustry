(() => {   
	let block = 8;

	const t = Blocks.;
	t.inaccuracy = 5;
	t.category = Category.production;
	t.reload = 12.5;
	t.range = block * 1;
	t.size = 4;
	t.requirements = ItemStack.with(Items.copper,1); 
	const copperBullet = bul(BasicBulletType, {
		width : 8.5 ,
		height : 8.5 ,
		damage : 12 ,
	 	lifetime : 80 ,
		speed : 8
	});
    
	t.ammo(
	 	Items.copper , copperBullet
	);
	function bul(type, options){
	 	return extend(type, options);
	}  
})();
