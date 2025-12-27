// for 1.18 pls use: onEvent("ponder.tag", event => { ... })
Ponder.tags((event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:mekanism_generators_ponders", "mekanismgenerators:heat_generator", "Mekanism Generators", "Different kinds of FE generators from Mekanism.", [
        "mekanismgenerators:heat_generator",
        "mekanismgenerators:gas_burning_generator",
        "mekanismgenerators:bio_generator",
        "mekanismgenerators:solar_generator",
        "mekanismgenerators:advanced_solar_generator",
        "mekanismgenerators:wind_generator",
        "mekanismgenerators:turbine_casing",
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:fission_reactor_port',
        'mekanismgenerators:fission_reactor_logic_adapter',
        'mekanismgenerators:fission_fuel_assembly'
    ]);
});