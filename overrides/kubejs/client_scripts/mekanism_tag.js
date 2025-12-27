// for 1.18 pls use: onEvent("ponder.tag", event => { ... })
Ponder.tags((event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:mekanism_ponders", "mekanism:metallurgic_infuser", "Mekanism", "NUCLEAR REACTOR!", [
        "mekanism:configurator",
        "mekanism:thermal_evaporation_controller",
        "mekanism:boiler_casing",
        //"mekansim:boiler_valve"
    ]);
});