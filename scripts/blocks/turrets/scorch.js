let block = 8;

Blocks..size = 4;
Blocks..category = Category.production;
Blocks..reload = 12.5;
Blocks..range = block*28;
Blocks..inaccuracy = 5;
Blocks..targetGround = true;

Blocks..requirements = ItemStack.with(Items.copper, 1);
Blocks..ammo(
	Items.copper,
	extend(BasicBulletType, {
		width: 8.5,
		height: 8.5,
		speed: 8,
		damage: 12,
		lifetime: 80
	})
);
