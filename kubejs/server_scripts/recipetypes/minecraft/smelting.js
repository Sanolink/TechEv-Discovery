//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.2

ServerEvents.recipes(event => {

    //Remove
    event.remove([{ type: 'minecraft:smelting', input: '#create:crushed_raw_materials' }])
    event.remove({ id: 'naturalist:cooked_egg' })
    event.remove({ id: 'quark:tweaks/smelting/bone_meal_utility' })

    //Recipes
    const recipes = [
        {
            id: 'raw_andesite_alloy',
            in: 'create:raw_andesite_alloy',
            out: 'create:andesite_alloy'
        }
    ]

    //General Smelting Function
    recipes.forEach((recipe) => {
        event.smelting(recipe.out, recipe.in).id('minecraft:smelting/' + recipe.id)
    })
})
