Ponder.registry((event) => {

    function createThermalEvaporationScene(scene, util) {
        scene.showStructure();
        scene.world.setBlocks([1, 1, 1, 4, 1, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlock([4, 2, 1], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlock([3, 2, 1], "mekanism:thermal_evaporation_valve", true);
        scene.world.setBlock([2, 2, 1], "mekanism:thermal_evaporation_controller", true);
        scene.world.setBlock([1, 2, 1], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([1, 2, 2, 1, 2, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([4, 2, 2, 4, 2, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([3, 2, 4, 2, 2, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([1, 3, 1, 4, 3, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([3, 3, 2, 2, 3, 3], "minecraft:air", false);
        scene.world.setBlock([1, 2, 2], "mekanism:thermal_evaporation_valve", false);
        scene.world.setBlocks([3, 4, 1, 2, 4, 1], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([1, 4, 2, 1, 4, 3], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([2, 4, 4, 3, 4, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([4, 4, 3, 4, 4, 2], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlock([4, 4, 1], "mekanismgenerators:advanced_solar_generator", true);
        scene.world.setBlock([4, 4, 4], "mekanismgenerators:advanced_solar_generator", true);
        scene.world.setBlock([1, 4, 4], "mekanismgenerators:advanced_solar_generator", true);
        scene.world.setBlock([1, 4, 1], "mekanismgenerators:advanced_solar_generator", true);

        scene
            .text(120, "The Thermal Evaporation Chamber evaporates luquids into other liquids (most notably into Brine) in a precise way.")
            .attachKeyFrame();
        scene.idle(130);
        scene
            .text(120, "Making the Thermal Exaporation Chamber higher increases the temperature, which you can check by right clicking the Thermal Evaporation Controller.")
            .attachKeyFrame();
        scene
            .showControls(60, [2.7, 2.5, 1.5], "down")
            .rightClick();
        scene.idle(125);
        scene
            .text(120, "While you are there, you can also click the main info pannel (the one displaying temperature) to view all recipes.")
            .attachKeyFrame();
        scene.idle(125);
        scene
            .text(120, "To construct this multiblock just follow this ponder, there is no stuff hidden in the back, just a 4x4 tower of Thermal Evaporation Blocks, one controller and 2 or more valves, which CANNOT be on the corners of the structure.")
            
        scene.idle(125);
        scene
            .text(120, "You need at least 2 valves as one is the input, for example water in the Brine recipe, and one for an output.")
        scene.idle(125);
        scene
            .text(120, "You may also use regular Solar Panels. Once the structure is assembled, you will see red particles all around it.")
            .attachKeyFrame();
        scene.idle(125);
        scene
            .text(120, "The max height of the structure is 18 blocks, the higher, the bigger temperature. This may be needed for some recipes.")
        scene.idle(125);
        scene.world.setBlock([1, 2, 3], "mekanism:thermal_evaporation_valve", false);
        scene.world.setBlock([0, 2, 3], "mekanism:resistive_heater", true);
        scene
            .text(120, "You can also put a Resistive Heater next to any Thermal Evaporation Valve and power it, set a limit of 1240FE (the max that actually has an effect) to increase the temperature more easily.")
            .attachKeyFrame();
    }

    // Apply the same scene to multiple items/blocks
    const entries = [
        "mekanism:thermal_evaporation_block",
        "mekanism:thermal_evaporation_controller",
        "mekanism:thermal_evaporation_valve"
    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-thermal-evaporation-chamber", "Thermal Evaporation Chamber", createThermalEvaporationScene);
    }
});

Ponder.registry((event) => {

    function createThermalEvaporationScene(scene, util) {
        scene.showStructure();
        scene.world.setBlocks([1, 1, 1, 4, 1, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlock([4, 2, 1], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlock([3, 2, 1], "mekanism:thermal_evaporation_valve", true);
        scene.world.setBlock([2, 2, 1], "mekanism:thermal_evaporation_controller", true);
        scene.world.setBlock([1, 2, 1], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([1, 2, 2, 1, 2, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([4, 2, 2, 4, 2, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([3, 2, 4, 2, 2, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([1, 3, 1, 4, 3, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([3, 3, 2, 2, 3, 3], "minecraft:air", false);
        scene.world.setBlock([1, 2, 2], "mekanism:thermal_evaporation_valve", false);
        scene.world.setBlocks([3, 4, 1, 2, 4, 1], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([1, 4, 2, 1, 4, 3], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([2, 4, 4, 3, 4, 4], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlocks([4, 4, 3, 4, 4, 2], "mekanism:thermal_evaporation_block", true);
        scene.world.setBlock([4, 4, 1], "mekanismgenerators:advanced_solar_generator", true);
        scene.world.setBlock([4, 4, 4], "mekanismgenerators:advanced_solar_generator", true);
        scene.world.setBlock([1, 4, 4], "mekanismgenerators:advanced_solar_generator", true);
        scene.world.setBlock([1, 4, 1], "mekanismgenerators:advanced_solar_generator", true);
        scene.world.setBlock([1, 2, 3], "mekanism:thermal_evaporation_valve", false);
        scene.world.setBlock([0, 2, 3], "mekanism:resistive_heater", true);
        scene
            .text(120, "You can also put a Resistive Heater next to any Thermal Evaporation Valve and power it, set a limit of 1240FE (the max that actually has an effect) to increase the temperature more easily.")
            .attachKeyFrame();
    }

    // Apply the same scene to multiple items/blocks
    const entries = [
        "mekanism:thermal_evaporation_block",
        "mekanism:thermal_evaporation_controller",
        "mekanism:thermal_evaporation_valve"
    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-thermal-evaporation-chamber", "Thermal Evaporation Chamber", createThermalEvaporationScene);
    }
});

