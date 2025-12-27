Ponder.registry((event) => {
    function createFusionReactorScene1(scene, util) {
        scene.showStructure();
        scene.text(60, 'The Fusion Reactor is an incredibly powerfull mechanism, harnessing fusion, adding 2 smaller atoms into 1 bigger one.');
        scene.idle(65);
        scene.text(60, 'It is built in 5 layers.');
        scene.idle(65);
        //Build first layer
        scene.world.setBlock([2, 1, 0], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([1, 1, 1, 3, 1, 1], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([0, 1, 2, 4, 1, 2], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([1, 1, 3, 3, 1, 3], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([2, 1, 4], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.text(60, 'The first layer is this Rombus shape.');
        scene.idle(70);
        //Build second layer
        scene.world.setBlocks([1, 2, 0, 3, 2, 0], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([0, 2, 1], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([4, 2, 1], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([0, 2, 2], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([4, 2, 2], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([0, 2, 3], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([4, 2, 3], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([1, 2, 4, 3, 2, 4], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.text(60, 'The second layer is a square without corners.');
        scene.idle(70);
        //Build third layer
        scene.world.setBlocks([0, 3, 0, 4, 3, 4], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], 'minecraft:air', false);
        scene.text(60, 'The third layer is just a square');
        scene.idle(65);
        scene.text(60, 'Layers 4 and 5 and just layers 2 and 1');
        //Build layers 2 and 1 as 4 and 5
        scene.world.setBlocks([1, 4, 0, 3, 4, 0], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([0, 4, 1], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([4, 4, 1], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([0, 4, 2], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([4, 4, 2], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([0, 4, 3], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([4, 4, 3], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([1, 4, 4, 3, 4, 4], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([2, 5, 0], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([1, 5, 1, 3, 5, 1], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([0, 5, 2, 4, 5, 2], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlocks([1, 5, 3, 3, 5, 3], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.world.setBlock([2, 5, 4], 'mekanismgenerators:fusion_reactor_frame', true);
        scene.idle(65);
        scene.text(60, 'To assemble the reactor, add a Fusion Reactor Controller to the top');
        scene.world.setBlock([2, 5, 2], 'mekanismgenerators:fusion_reactor_controller', false);
        scene.idle(65);
        scene.text(80, 'The reactor is assembled now, but there is no way to put anything in and no way to pull anything out. To fix this, add 2 ports, 1 input and 1 output. In the input port, pipe D-T Fuel and from the output port pull elecrticity.').attachKeyFrame();
        scene.world.setBlocks([0, 3, 1, 0, 3, 2], 'mekanismgenerators:fusion_reactor_port', false);
        scene.world.modifyBlock([0, 3, 2], (curState) => curState.with("active", true), false);
        scene.idle(85);
        scene.world.setBlock([2, 3, 0], 'mekanismgenerators:laser_focus_matrix', false);
        scene.text(60, 'You also need a Laser Focus Matrix that you are going to shine a laser trough to start the reactor. See the other Ponder page for more info.').attachKeyFrame();
    }
    
    // Apply the same scene to multiple items/blocks
    const entries = [
        'mekanismgenerators:fusion_reactor_controller',
        'mekanismgenerators:fusion_reactor_frame',
        'mekanismgenerators:fusion_reactor_port',
        'mekanismgenerators:fusion_reactor_logic_adapter',
        'mekanismgenerators:laser_focus_matrix'
    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-fusion-reactor-1", "Fusion Reactor", createFusionReactorScene1);
    }
});

Ponder.registry((event) => {
    function createFusionReactorScene2(scene, util) {
        scene.configureBasePlate(0, 0, 8);
        scene.showBasePlate();
        scene.encapsulateBounds([8, 800, 8]);
        scene.scaleSceneView(0.50);
        scene.showStructure();

        scene.text(60, 'To start the reactor, you need a matrix of lazers, that are added together into 1 big beam with Laser Amplifiers (the blocks in the center of this ponder.).').attachKeyFrame();
        scene.idle(65);
        scene.text(60, "The side that actually shoots the laser is the one with the red dot and all other ones take in the laser light, so point every Laser Amplifier to each other with the red point, connecting them together.").attachKeyFrame();
        scene.idle(65);
        scene.text(60, 'Power every laser with the power from your Fission reactor. The ammount of lasers shown is the recommended one, you can put more or less, that will decrease or increase the time needed to charge the needed energy respecivly.').attachKeyFrame();
        scene.idle(65);
        scene.text(60, 'And talking about power, you need to point this lazer matrix to the Laser Focus Matrix of your Fission Reactor and you have to shoot it when it reaches 1GFE, making sure there is a Hohlraum in the reactor.').attachKeyFrame();
        scene.idle(65);
        scene.text(60, "To set the power requirements, in every Laser ampifier expect the one that will actually shoot the laser's minimum to 999999999999 and the max to the same value. The end one that is going to shoot, you need to set the Max to 999999999999 and the minimum to 1000000000").attachKeyFrame();
    }
    
    // Apply the same scene to multiple items/blocks
    const entries = [
        'mekanismgenerators:fusion_reactor_controller',
        'mekanismgenerators:fusion_reactor_frame',
        'mekanismgenerators:fusion_reactor_port',
        'mekanismgenerators:fusion_reactor_logic_adapter',
        'mekanismgenerators:laser_focus_matrix'
    ];

    for (const id of entries) {
        event.create(id).scene("mekanism-fusion-reactor-1", "Fusion Reactor Laser Matrix", "kubejs:fusion_reactor_laser_matrix", createFusionReactorScene2);
    }
});