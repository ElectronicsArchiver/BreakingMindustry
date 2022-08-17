let block = 8;

Blocks.duo.size = 2;
Blocks.duo.reload = 20;
Blocks.duo.range = block*17;
Blocks.duo.shootY = 1;
Blocks.duo.inaccuracy = 0;
Blocks.duo.requirements = ItemStack.with(Items.copper, 55, Items.lead, 30);
Blocks.duo.ammo(
	Items.copper,
	extend(BasicBulletType, {
		width: 9,
		height: 9,
		speed: 7,
		damage: 20,
		lifetime: 30
	}),
	Items.lead,
	extend(BasicBulletType, {
		width: 6,
		height: 7,
		speed: 9,
		damage: 22,
		reloadMultiplier: 2.5,
		lifetime: 30
	}),
	Items.graphite,
	extend(BasicBulletType, {
		width: 9,
		height: 9,
		speed: 6,
		damage: 28,
		reloadMultiplier: 0.6,
		lifetime: 37.5
	}),
	Items.silicon,
	extend(BasicBulletType, {
		width: 9,
		height: 9,
		speed: 9,
		damage: 25,
		reloadMultiplier: 1.35,
		lifetime: 30,
		homingRange: block*17,
		homingPower: 0.6
	})
);
