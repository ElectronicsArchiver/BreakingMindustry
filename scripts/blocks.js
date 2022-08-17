const test = extendContent(Wall, "test", {
	health: 200,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.copper, 1000
	),
	category: Category.defense
});

const test2 = extendContent(Wall, "test2", {});
test2.health = 200;
test2.buildVisibility = BuildVisibility.shown;
test2.requirements = ItemStack.with(
	Items.copper, 1000
);
test2.category = Category.defense;

const test3 = extend(Wall, "test3", {
	health: 200,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		Items.copper, 1000
	),
	category: Category.defense
});

const test4 = extendContent(Wall, "test4", {});
test4.health = 200;
test4.buildVisibility = BuildVisibility.shown;
test4.requirements = ItemStack.with(
	Items.copper, 1000
);
test2.category = Category.defense;

module.exports = {
	test: test,
	test2: test2,
	test3: test3,
	test4: test4
}
