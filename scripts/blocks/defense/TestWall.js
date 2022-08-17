const TestWall = extend(Wall, "test-wall", {
	size: 2,
	scaledHealth: 100,
	localizedName: "Test Wall",
	buildVisibility: buildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(Items.copper, 28)
});

exports.TestWall = TestWall;
