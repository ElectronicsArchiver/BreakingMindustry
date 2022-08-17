let block = 8;

/* block start */

// turret start
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
		lifetime: 45
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

Blocks.scatter.size = 4;
Blocks.scatter.category = Category.production;
Blocks.scatter.reload = 12.5;
Blocks.scatter.range = block*28;
Blocks.scatter.recoil = 2.5;
Blocks.scatter.shootY = 0;
Blocks.scatter.inaccuracy = 5;
Blocks.scatter.targetGround = true;
Blocks.scatter.shoot.shootDelay = 0;
Blocks.scatter.shoot.shots = 1;
Blocks.scatter.requirements = ItemStack.with(Items.copper, 272, Items.lead, 295, Items.graphite, 164);
Blocks.scatter.ammo(
	Items.scrap,
	extend(FlakBulletType, {
		width: block-0.75,
		height: block-0.75,
		collidesGround: true,
		speed: 7,
		damage: 6,
		lifetime: Blocks.scatter.range/this.speed
	}),
	Items.lead,
	extend(FlakBulletType, {
		width: block+0.5,
		height: block+0.5,
		reloadMultiplier: 1.5,
		collidesGround: true,
		frontColor: Items.lead.color,
		backColor: Items.lead.color,
		speed: 7.45,
		damage: 12,
		lifetime: Blocks.scatter.range/this.speed
	}),
	Items.metaglass,
	extend(FlakBulletType, {
		width: block+1.25,
		height: block+1.25,
		collidesGround: true,
		fragBullets: 6,
		speed: 7.45,
		damage: 12,
		lifetime: Blocks.scatter.range/this.speed
		fragBullet: extend(BasicBulletType, {
	 	 	width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			collidesGround: true,
			backColor: Pal.gray,
	 	 	frontColor: Color.white,
		 	despawnEffect: Fx.none,
	 	 	collidesGround: true
		})
	}),
	Items.silicon,
	extend(FlakBulletType, {
		width: block,
		height: block,
		speed: 6.8,
		damage: 17,
		frontColor: Pal.darkishGray,
		backColor: Pal.darkerMetal,
		reloadMultiplier: 1.2,
		homingPower: 1,
		homingRange: Blocks.scatter.range
	}),
);
// turret end
