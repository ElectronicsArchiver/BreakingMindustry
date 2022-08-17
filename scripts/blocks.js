let block = 8

Blocks.duo.size = 2
Blocks.duo.reload = 20
Blocks.duo.range = block*17
Blocks.duo.requirements = ItemStack.with(Items.copper, 55, Items.lead, 30)
Blocks.duo.ammo(
	Items.copper,
	extend(BasicBulletType, {
		width: 10,
		height: 10,
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
	})
)
