let block = 8;

Blocks.duo.size = 4;
Blocks.duo.category = Category.production;
Blocks.duo.reload = 20;
Blocks.duo.range = block*25;
Blocks.duo.recoil = 2.5;
Blocks.duo.shootY = 1;
Blocks.duo.inaccuracy = 0;
Blocks.duo.shoot.shots = 1;
Blocks.duo.requirements = ItemStack.with(Items.copper, 375, Items.lead, 220, Items.graphite, 264);
Blocks.duo.ammo(
	Items.copper,
	extend(BasicBulletType, {
		width: 9,
		height: 9,
		speed: 7,
		damage: 20,
		lifetime: Blocks.scatter.range/this.speed
	}),
	Items.lead,
	extend(BasicBulletType, {
		width: 6,
		height: 7,
		speed: 9,
		damage: 22,
		reloadMultiplier: 2.5,
		lifetime: 45
	}),
	Items.graphite,
	extend(BasicBulletType, {
		width: 9,
		height: 9,
		speed: 6,
		damage: 28,
		reloadMultiplier: 0.6,
		lifetime: 65.75
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
		homingPower: 45
	})
);
