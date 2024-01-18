//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

StartupEvents.postInit(event => {
    if (Platform.isClientEnvironment) return;
    const $ItemProperties = Java.loadClass('net.minecraft.client.renderer.item.ItemProperties')
    const Plates = [
        'alltheores:aluminum_plate',
        'alltheores:brass_plate',
        'alltheores:bronze_plate', 
        'alltheores:constantan_plate', 
        'alltheores:copper_plate',
        'alltheores:diamond_plate',
        'alltheores:electrum_plate',
        'alltheores:enderium_plate',
        'alltheores:gold_plate',
        'alltheores:invar_plate',
        'alltheores:iridium_plate',
        'alltheores:iron_plate',
        'alltheores:lead_plate',
        'alltheores:lumium_plate',
        'alltheores:nickel_plate',
        'alltheores:osmium_plate',
        'alltheores:platinum_plate',
        'alltheores:signalum_plate',
        'alltheores:silver_plate',
        'alltheores:steel_plate',
        'alltheores:tin_plate',
        'alltheores:uranium_plate',
        'alltheores:zinc_plate'
    ]
    Plates.forEach(plate => {
        $ItemProperties.register(Item.of(plate), new ResourceLocation('count'), (stack, world, living, seed) => {
            return stack.getCount() / stack.getMaxStackSize()
        })
    })
})