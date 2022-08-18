let block = 8;

Blocks.scorch.size = 4;
Blocks.scorch.category = Category.production;
Blocks.scorch.reload = 6.75;
Blocks.scorch.range = block*22;
Blocks.scorch.inaccuracy = 0;
Blocks.scorch.targetAir = true;
Blocks.scorch.rotateSpeed = 5;
Blocks.scorch.recoil = 1.5;
Blocks.scorch.requirements = ItemStack.with(Items.copper, 188, Items.lead, 142, Items.silicon, 50);
Blocks.scorch.ammo(
	Items.coal,
	extend(BulletType, {
		speed: 9,
		damage: 17*2.25,
		ammoMultiplier: 3,
		hitSize: 7,
		lifetime: 20,
		pierce: true,
		collidesAir: true,
		statusDuration: 60 * 8,
		shootEffect: Fx.shootSmallFlame,
		hitEffect: Fx.hitFlameSmall,
		despawnEffect: Fx.none,
		status: StatusEffects.burning,
		keepVelocity: false,
		hittable: false
	}),
	Items.pyratite,
	extend(BulletType, {
		speed: 4,
		damage: 60,
		ammoMultiplier: 6,
		lifetime: 20,
		pierce: true,
		collidesAir: true,
		statusDuration: 60 * 17,
	 	shootEffect: Fx.shootPyraFlame,
		hitEffect: Fx.hitFlameSmall,
		despawnEffect: Fx.none,
		status: StatusEffects.burning,
		hittable: false
	})
);
