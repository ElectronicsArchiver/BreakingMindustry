// there's no liquidturret builder in `TurretBuilder.js` (?)
// so i just coded it like this
// - Drifted Notes
const block = 8;

const t = wave;
t.category = Category.production;
t.requirements = ItemStack.with(
    Items.metaglass, 65, Items.lead, 160, Items.copper, 125
);
t.size = 3;
t.inaccuracy = 3;
t.recoil = 0.5;
t.reload = 2.25;
t.scaledHealth = 250 * 1.5;
t.range = block * 16;
t.ammo(
    Liquids.water, extend(LiquidBulletType,{
        liquid : Liquids.water,
        knockback : 0.7,
        drag : 0.01,
        layer : Layer.bullet - 2
    }),
    Liquids.slag, extend(LiquidBulletType,{
        liquid : Liquids.slag,
        damage : 4,
        drag : 0.01,
    }),
    Liquids.cryofluid, extend(LiquidBulletType, {
        liquid : Liquids.cryofluid,
        drag : 0.01
    }),
    Liquids.oil, extend(LiquidBulletType, {
        liquid : Liquids.oil,
        drag : 0.01,
        layer : Layer.bullet - 2
    }),
);