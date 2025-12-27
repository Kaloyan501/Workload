Ponder.registry((event) => {

    function modifyTurbineRotorNBT(number, scene){
        scene.world.modifyBlockEntityNBT([2, 2 + number, 2], (nbt) => {
            nbt.blades = 2;
            nbt.position = number;
        });
    }



    function createIndustrialTurbineScene1(scene, util) {
        scene.text(60, 'The Industrial Turbine turns pressurized gasses into power by rotating blades. Most of the time, that gas comes from a nuclear reactor.')
        scene.idle(65);
        scene.showStructure();
        scene.world.setBlocks([0, 1, 0, 4, 1, 4], 'mekanismgenerators:turbine_casing', true);
        scene.text(60, 'The base always needs to be a square with a minimum size of 5x5 and a maximum size of 15x15');
        scene.idle(65);
        scene.text(60, 'The minimum height is 5 blocks, but the size that makes the most sence is 9 blocks.');
        scene.idle(65);
        scene.text(60, 'Place the wall posts of Turbine Casing.');
        scene.world.setBlocks([0, 2, 0, 0, 11, 0], 'mekanismgenerators:turbine_casing', true);
        scene.world.setBlocks([4, 2, 0, 4, 11, 0], 'mekanismgenerators:turbine_casing', true);
        scene.world.setBlocks([0, 2, 4, 0, 11, 4], 'mekanismgenerators:turbine_casing', true);
        scene.world.setBlocks([4, 2, 4, 4, 11, 4], 'mekanismgenerators:turbine_casing', true);
        scene.idle(65);
        scene.rotateCameraY(41);
        scene.text(60, 'Now you need to add a Turbine Rotor and Turbine Blades on it. The maximum height of the Rotor for a given size of the base is min(2xLENGTH-5,14) so the blades dont touch the walls.').attachKeyFrame();
        scene.world.setBlocks([2, 2, 2, 2, 5, 2], 'mekanismgenerators:turbine_rotor', true);
        for (let i = 0; i < 4; i++) {
            modifyTurbineRotorNBT(i, scene);
        }
        scene.idle(65);
        scene.text(60, 'To place the blades, right click the Turbine Rotor with Turbine Blades (From Mekansim).');
        scene.idle(65);
        scene.world.setBlocks([1, 6, 1, 3, 6, 3], 'mekanism:pressure_disperser', true);
        scene.world.setBlock([2, 6, 2], 'mekanismgenerators:rotational_complex', false);
        scene.text(60, 'Place a Rotational Complex on top of the Turbine Rotor , then fill the other space without covering the walls with Pressure Disperser around it like shown.').attachKeyFrame();
        scene.idle(65);
        scene.world.setBlocks([1, 7, 1, 3, 7, 3], 'mekanismgenerators:electromagnetic_coil', true);
        scene.text(60, 'Cover that layer in Electromagnetic Coils like shown').attachKeyFrame();
        scene.idle(65);
        scene.world.setBlocks([1, 8, 1, 3, 8, 3], 'mekanismgenerators:saturating_condenser', true);
        scene.text(60, 'On the top of that layer, place Saturating Condencers').attachKeyFrame();
        scene.idle(65);
        scene.world.setBlocks([1, 2, 0, 3, 5, 0], 'mekanism:structural_glass', true);
        scene.world.setBlocks([0, 2, 1, 0, 5, 3], 'mekanism:structural_glass', true);
        scene.world.setBlocks([4, 2, 1, 4, 5, 3], 'mekanism:structural_glass', true);
        scene.world.setBlocks([1, 2, 4, 3, 5, 4], 'mekanism:structural_glass', true);
        scene.text(60, 'Place Structural glass up to but not covering the Pressure Dispersers. This can also be substitured with Turbine Casings if you dont want to see what is happening inside the turbine.').attachKeyFrame();
        scene.idle(65);
        scene.world.setBlocks([1, 6, 0, 3, 9, 0], 'mekanismgenerators:turbine_casing', true);
        scene.world.setBlocks([0, 6, 1, 0, 9, 3], 'mekanismgenerators:turbine_casing', true);
        scene.world.setBlocks([4, 6, 1, 4, 9, 3], 'mekanismgenerators:turbine_casing', true);
        scene.world.setBlocks([1, 6, 4, 3, 9, 4], 'mekanismgenerators:turbine_casing', true);
        scene.world.setBlocks([1, 9, 1, 3, 9, 3], 'mekanismgenerators:turbine_casing', true);
        scene.text(60, 'Cover the remaining walls and the top with Turbine Casings').attachKeyFrame();
        scene.idle(65);
        scene.world.setBlocks([1, 8, 0, 3, 8, 0], 'mekanismgenerators:turbine_vent', false);
        scene.text(60, 'On the outside, add Pressure Dispersers, 12 for smaller turbines and 24 for bigger ones. They increase the flow rate, but there is a point of deminishing returns.').attachKeyFrame();
    }

    

    // Apply the same scene to multiple items/blocks
    const entries = [
        'mekanismgenerators:turbine_casing',
        'mekanismgenerators:turbine_vent',
        'mekanism:pressure_disperser',
        'mekanismgenerators:turbine_blade',
        'mekanismgenerators:turbine_rotor',
        'mekanismgenerators:rotational_complex',
        'mekanismgenerators:electromagnetic_coil',
        'mekanismgenerators:turbine_valve',
        'mekanism:structural_glass',
        'mekanismgenerators:saturating_condenser'
    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-industrial-turbine-1", "Industrial Turbine", createIndustrialTurbineScene1);
    }
});