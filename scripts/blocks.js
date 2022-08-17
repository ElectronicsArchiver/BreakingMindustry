// region test
const test = extend(Router, "test", {
	requirements: ItemStack.with(Items.copper, 1, Items.lead, 3),
	buildVisibility: BuildVisibility.shown,
	category: Category.turret,
	size: 2,
	localizedName: "bejir"
	health: 1000
}):
// end test
module.exports = {
	test = test
};
