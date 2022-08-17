let block = 8;

Blocks.scatter.size = 4;
Blocks.scatter.category = Category.production;
Blocks.scatter.reload = 12.5;
Blocks.scatter.range = block*28;
Blocks.scatter.recoil = 2.5;
Blocks.scatter.shootY = 0;
Blocks.scatter.inaccuracy = 5;
Blocks.scatter.targetGround = true;
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
		lifetime: Blocks.scatter.range/this.speed,
		fragBullet: extend(BasicBulletType, {
	 	 	width: 5,
			height: 12,
			shrinkY: 1,
			lifetime: 20,
			collidesGround: true,
			backColor: Pal.gray,
	 	 	frontColor: Color.white,
		 	despawnEffect: Fx.none
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
		lifetime: Blocks.scatter.range/this.speed,
		homingRange: Blocks.scatter.range
	})
);
