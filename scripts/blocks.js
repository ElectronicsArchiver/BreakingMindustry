Blocks.duo.size = 3
Blocks.duo.reload = 5
Blocks.duo.ammo(
	Items.copper,
	extend(BasicBulletType, {
		width: 10,
		height: 10,
		speed: 7,
		damage: 20,
		lifetime: 9 * Blocks.duo.range
	}),
	Items.lead,
	extend(BasicBulletType, {
		width: 6,
		height: 7,
		speed: 9,
		damage: 22,
		reloadMultiplier: 2.5,
		lifetime: 9 * Blocks.duo.range
	})
)
