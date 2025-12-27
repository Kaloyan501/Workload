Ponder.registry((event) => {

    function createFissionReactorScene1(scene, util) {
        //Create the reactor structure
        scene.world.setBlocks([0, 1, 0, 4, 1, 4], 'mekanismgenerators:fission_reactor_casing', true);
        scene.world.setBlocks([0, 2, 0, 0, 4, 0], 'mekanismgenerators:fission_reactor_casing', true);
        scene.world.setBlocks([4, 2, 0, 4, 4, 0], 'mekanismgenerators:fission_reactor_casing', true);
        scene.world.setBlocks([4, 2, 4, 4, 4, 4], 'mekanismgenerators:fission_reactor_casing', true);
        scene.world.setBlocks([0, 2, 4, 0, 4, 4], 'mekanismgenerators:fission_reactor_casing', true);
        scene.world.setBlocks([0, 5, 0, 4, 5, 4], 'mekanismgenerators:fission_reactor_casing', false);
        scene.world.setBlocks([1, 2, 0, 3, 4, 0], 'mekanismgenerators:reactor_glass', true);
        scene.world.setBlocks([0, 2, 1, 0, 4, 3], 'mekanismgenerators:reactor_glass', true);
        scene.world.setBlocks([1, 2, 4, 3, 4, 4], 'mekanismgenerators:reactor_glass', true);
        scene.world.setBlocks([4, 2, 1, 4, 4, 3], 'mekanismgenerators:reactor_glass', true);
        scene.world.setBlocks([3, 2, 1, 3, 3, 1], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([3, 2, 3, 3, 3, 3], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([2, 2, 2, 2, 3, 2], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([1, 2, 1, 1, 3, 1], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([1, 2, 3, 1, 3, 3], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlock([3, 4, 1], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([3, 4, 3], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([2, 4, 2], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([1, 4, 1], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([1, 4, 3], 'mekanismgenerators:control_rod_assembly', true);

        //Add ports
        scene.world.setBlocks([1, 2, 0, 3, 2, 0], 'mekanismgenerators:fission_reactor_port', false);
        scene.world.setBlock([0, 2, 1], 'mekanismgenerators:fission_reactor_port', false);

        //Set state of 2 ports to output
        scene.world.modifyBlock([0, 2, 1], (curState) => curState.with("mode", "output_coolant"), false);
        scene.world.modifyBlock([1, 2, 0], (curState) => curState.with("mode", "output_waste"), false);
        
        scene.showStructure();
        scene.idle(10);
        // scene.rotateCameraY(90);

        scene
            .text(120, "This is a Fission Reactor. It makes power by deviding atoms from nuclear elements.");
        scene.idle(120);
        scene.text(120, "The minimum size of the multiblock is a 3x4x3 cube, while the maximum size is 18x18x18.").attachKeyFrame();
        scene.idle(120);
        scene.text(120, "The nuclear reactor does not provide power on its own. Instead it needs coolant (Water or Liquid Sodium) that is heated up.");
        scene.idle(120);
        scene.text(120, "To generate power from the nuclear reactor, you need to pipe the coolant that has already been heated by the reactor to an Industrial Turbine (If using just water) or trough an Industrial Boiler and then to the Industial Turbine in case of Sodium based cooling, which is more efficient.").attachKeyFrame();
        scene.idle(120);
        scene.text(60, "The Fission Reactor needs 4 ports with different settings, set by SHIFT + Right clicking them with a Configurator:");
        scene.idle(60);
        scene.showControls(60, [1.5, 2.5, 0], "right").whileSneaking().withItem("mekanism:configurator");
        scene.idle(60);
        scene.text(60, "2 Input Only ports", [2.5, 2.5, 0]).placeNearTarget();
        scene.idle(60);
        scene.text(60, "One Output Coolant port (the output of going to the Industial Turbine or Industrial Boiler)", [0, 2.5, 1.5]).placeNearTarget();
        scene.idle(60);
        scene.text(60, "One Waste Only port to output Nuclear Waste and recycle it later.", [0.8, 2, 0]).placeNearTarget().attachKeyFrame();
        scene.idle(60);
        scene.text(60, "In the 2 Input Ports you need to Pipe coolant (Water or Sodium) and Fissile Fuel (See JEI for recipe, it involves a few machines chained together)");
    }

    

    // Apply the same scene to multiple items/blocks
    const entries = [
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:fission_reactor_port',
        'mekanismgenerators:fission_reactor_logic_adapter',
        'mekanismgenerators:fission_fuel_assembly',
        'mekanismgenerators:control_rod_assembly'

    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-fission-reactor-ponder1", "Fission Reactor", createFissionReactorScene1);

    }
});




            


Ponder.registry((event) => {

    function createFissionReactorScene2(scene, util) {
        //Create control rod structure
        scene.world.setBlocks([3, 2, 1, 3, 3, 1], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([3, 2, 3, 3, 3, 3], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([2, 2, 2, 2, 3, 2], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([1, 2, 1, 1, 3, 1], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlocks([1, 2, 3, 1, 3, 3], 'mekanismgenerators:fission_fuel_assembly', true);
        scene.world.setBlock([3, 4, 1], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([3, 4, 3], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([2, 4, 2], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([1, 4, 1], 'mekanismgenerators:control_rod_assembly', true);
        scene.world.setBlock([1, 4, 3], 'mekanismgenerators:control_rod_assembly', true);

        scene.showStructure();
        scene.text(60, "The Control Rods slow down the reaction, so its speed is manigable. They are placed in a checkered board pattern with one vertical hole being empty, while the other having the assembly.")
        scene.idle(65);
        scene.text(60, "The assembly consist of Control Rod Assembly blocks at the very top and Fission Fuel Assembly block to the bottom of the reactor, just like shown in this ponder.");
    }

    

    // Apply the same scene to multiple items/blocks
    const entries = [
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:fission_reactor_port',
        'mekanismgenerators:fission_reactor_logic_adapter',
        'mekanismgenerators:fission_fuel_assembly',
        'mekanismgenerators:control_rod_assembly'

    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-fission-reactor-ponder2", "Fission Reactor Control Rod Arangement", createFissionReactorScene2);

    }
});