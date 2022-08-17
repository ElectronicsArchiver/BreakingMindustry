print('Loading spinner...')

const SpinBlock = extend(Block, {
    update: function(tile){
        tile.rotation(tile.rotation() + 1)
    }
})
const spinner = new SpinBlock("spinner")
spinner.update = true
spinner.localizedName = "Spinner"
spinner.description = "it spin"
spinner.rotate = true
spinner.category = Category.turret
spinner.buildVisibility = BuildVisibility.shown

print("Created spinner block.") 
