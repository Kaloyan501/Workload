Ponder.registry((event) => {
    function createThermoElecticBoilerScene1(scene, util) {
        scene.showStructure();
        scene.world.setBlocks([0, 1, 0, 3, 1, 3], 'mekanism:boiler_casing', true);
        scene.world.setBlocks([0, 2, 0, 0, 6, 0], 'mekanism:boiler_casing', true);
        scene.world.setBlocks([3, 2, 0, 3, 6, 0], 'mekanism:boiler_casing', true);
        scene.world.setBlocks([3, 2, 3, 3, 6, 3], 'mekanism:boiler_casing', true);
        scene.world.setBlocks([0, 2, 3, 0, 6, 3], 'mekanism:boiler_casing', true);
        scene.world.setBlocks([0, 6, 0, 3, 6, 3], 'mekanism:boiler_casing', false);
        
        scene.world.setBlocks([1, 2, 0, 2, 5, 0], 'mekanismgenerators:reactor_glass', true);
        scene.world.setBlocks([0, 2, 1, 0, 5, 2], 'mekanismgenerators:reactor_glass', true);
        scene.world.setBlocks([1, 2, 3, 2, 5, 3], 'mekanismgenerators:reactor_glass', true);
        scene.world.setBlocks([3, 2, 1, 3, 5, 2], 'mekanismgenerators:reactor_glass', true);

        scene.text(60, 'The Thermoelectric Boiler is just a cube of Boiler Casings, with the inside of the walls (as shown) being Reactor Glass or just Boiler casing.');
        scene.idle(65);
        scene.text(60, 'The minimum size is 3x4x3 and the maximum is 18x18x18');
        scene.idle(65);

        scene.world.setBlocks([1, 2, 1, 2, 2, 2], 'mekanism:superheating_element', true);
        scene.world.setBlocks([1, 5, 1, 2, 5, 2], 'mekanism:pressure_disperser', true);
        scene.world.setBlocks([1, 2, 0, 2, 2, 0], 'mekanism:boiler_valve', false);
        scene.world.setBlock([0, 2, 2], 'mekanism:boiler_valve', false);

        scene.world.modifyBlock([2, 2, 0], (curState) => curState.with("mode", "output_coolant"), false);
        scene.world.modifyBlock([0, 2, 2], (curState) => curState.with("mode", "output_steam"), false);

        scene.text(60, 'Then on the top, place Pressure Dispersers and Superheating Elements on the bottom');
        scene.idle(65);
        scene.text(60, 'It makes the most sence to run the Thermoelectric Boiler from a Fusion or Fission reactor.');
        scene.idle(65);
        scene.text(60, 'Place 3 valves, the Input being Sodium from your reactor, the Output Coolant back to the Reactor and Output Steam to the Industrial Turbine. Set these modes with the Configurator');
    }
    
    // Apply the same scene to multiple items/blocks
    const entries = [
        'mekanism:boiler_casing',
        'mekanism:boiler_valve',
        'mekanism:superheating_element'
    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-thermoelectric-boiler-1", "Thermoelectric Boiler", createThermoElecticBoilerScene1);
    }
});