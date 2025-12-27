Ponder.registry((event) => {
  function createSuperCriticalPhaseShifterScene1(scene, util) {
    // 1) Baseplate
    scene.configureBasePlate(0, 0, 8);
    scene.showBasePlate();
    scene.encapsulateBounds([8, 800, 8]);
    scene.scaleSceneView(0.50);

    scene.text(60, 'The SPS is made from these 7x7 rings…');
    scene.idle(65);

    // 2) Place your casing blocks (with particles)
    scene.world.setBlock([2, 1, 1], 'mekanism:sps_casing', true);
    scene.world.setBlock([1, 1, 2], 'mekanism:sps_casing', true);
    scene.world.setBlock([1, 1, 6], 'mekanism:sps_casing', true);
    scene.world.setBlock([2, 1, 7], 'mekanism:sps_casing', true);
    scene.world.setBlock([7, 1, 6], 'mekanism:sps_casing', true);
    scene.world.setBlock([6, 1, 7], 'mekanism:sps_casing', true);
    scene.world.setBlock([6, 1, 1], 'mekanism:sps_casing', true);
    scene.world.setBlock([7, 1, 2], 'mekanism:sps_casing', true);

    // 3) Reveal the entire Y=1 ring in one go
    const ring = util.select.fromTo(0, 1, 0, 8, 1, 8);
    scene.world.showSection(ring, Direction.DOWN);

    scene.world.setBlocks([1, 2, 1, 1, 5, 1], 'mekanism:sps_casing', true);
    scene.world.setBlocks([1, 2, 7, 1, 5, 7], 'mekanism:sps_casing', true);
    scene.world.setBlocks([7, 2, 1, 7, 5, 1], 'mekanism:sps_casing', true);
    scene.world.setBlocks([7, 2, 7, 7, 5, 7], 'mekanism:sps_casing', true);
    
    const verticalRingPosts = util.select.fromTo(0, 2, 0, 8, 5, 8);
    scene.world.showSection(verticalRingPosts, Direction.DOWN);

    scene.world.setBlock([2, 6, 1], 'mekanism:sps_casing', true);
    scene.world.setBlock([1, 6, 2], 'mekanism:sps_casing', true);
    scene.world.setBlock([1, 6, 6], 'mekanism:sps_casing', true);
    scene.world.setBlock([2, 6, 7], 'mekanism:sps_casing', true);
    scene.world.setBlock([7, 6, 6], 'mekanism:sps_casing', true);
    scene.world.setBlock([6, 6, 7], 'mekanism:sps_casing', true);
    scene.world.setBlock([6, 6, 1], 'mekanism:sps_casing', true);
    scene.world.setBlock([7, 6, 2], 'mekanism:sps_casing', true);

    const topDoubleCorner = util.select.fromTo(0, 6, 0, 8, 6, 8);
    scene.world.showSection(topDoubleCorner, Direction.DOWN);

    scene.world.setBlocks([3, 7, 1, 5, 7, 1], 'mekanism:sps_casing', true);
    scene.world.setBlocks([1, 7, 3, 1, 7, 5], 'mekanism:sps_casing', true);
    scene.world.setBlocks([7, 7, 3, 7, 7, 5], 'mekanism:sps_casing', true);
    scene.world.setBlocks([3, 7, 7, 5, 7, 7], 'mekanism:sps_casing', true);
    scene.world.setBlock([6, 7, 6], 'mekanism:sps_casing', true);
    scene.world.setBlock([6, 7, 2], 'mekanism:sps_casing', true);
    scene.world.setBlock([2, 7, 2], 'mekanism:sps_casing', true);
    scene.world.setBlock([2, 7, 7], 'mekanism:sps_casing', true);
    scene.world.setBlock([2, 7, 6], 'mekanism:sps_casing', true);
    scene.world.setBlock([2, 7, 7], 'minecraft:air', false);

    const topHorizontalBars = util.select.fromTo(0, 7, 0, 8, 7, 8);
    scene.world.showSection(topHorizontalBars, Direction.DOWN);

    scene.text(60, '... just like this.');
    scene.idle(65);
    scene.text(60, 'Then fill the base with SPS casing and the sides and top with Structural Glass or Reactor Glass');
    scene.idle(65);

    //wow animation so cool, animate the bottom comming from the top.
    scene.world.setBlocks([6, 0, 2, 2, 0, 6], 'mekanism:sps_casing', false);
    const setBaseToSPSCasings = util.select.fromTo(6, 0, 2, 2, 0, 6);
    scene.world.showSection(setBaseToSPSCasings, Direction.DOWN);
    
    // West side Structural Glass
    scene.world.setBlocks([5, 2, 1, 3, 5, 1], 'mekanism:structural_glass', false);
    scene.world.setBlocks([5, 1, 1, 3, 1, 1], 'mekanism:structural_glass', false);
    scene.world.setBlocks([2, 2, 1, 2, 5, 1], 'mekanism:structural_glass', false);
    scene.world.setBlocks([5, 6, 1, 3, 6, 1], 'mekanism:structural_glass', false);
    scene.world.setBlocks([6, 2, 1, 5, 5, 1], 'mekanism:structural_glass', false);

    // North side Structural Glass
    scene.world.setBlocks([1, 2, 3, 1, 5, 5], 'mekanism:structural_glass', false);
    scene.world.setBlocks([1, 1, 3, 1, 1, 5], 'mekanism:structural_glass', false);
    scene.world.setBlocks([1, 2, 2, 1, 5, 2], 'mekanism:structural_glass', false);
    scene.world.setBlocks([1, 2, 6, 1, 5, 6], 'mekanism:structural_glass', false);
    scene.world.setBlocks([1, 6, 3, 1, 6, 5], 'mekanism:structural_glass', false);

    // South side Structural Glass
    scene.world.setBlocks([5, 1, 7, 3, 6, 7], 'mekanism:structural_glass', false);
    scene.world.setBlocks([6, 2, 7, 6, 5, 7], 'mekanism:structural_glass', false);
    scene.world.setBlocks([2, 2, 7, 2, 5, 7], 'mekanism:structural_glass', false);

    // East side Structural Glass
    scene.world.setBlocks([7, 1, 5, 7, 6, 3], 'mekanism:structural_glass', false);
    scene.world.setBlocks([7, 2, 6, 7, 5, 6], 'mekanism:structural_glass', false);
    scene.world.setBlocks([7, 2, 2, 7, 5, 2], 'mekanism:structural_glass', false);

    scene.world.setBlocks([2, 7, 5, 6, 7, 3], 'mekanism:structural_glass', false);
    scene.world.setBlocks([3, 7, 6, 5, 7, 6], 'mekanism:structural_glass', false);
    scene.world.setBlocks([3, 7, 2, 5, 7, 2], 'mekanism:structural_glass', false);

    scene.text(60, 'The SPS also needs Supercharged Coils, to power them SPS ports (to input the power) and 2 more SPS ports to input Polonium and output Antimatter.');
    scene.idle(65);
    scene.world.setBlock([3, 1, 1], 'mekanism:sps_port', false);
    scene.world.setBlock([4, 1, 1], 'mekanism:sps_port', false);
    scene.world.modifyBlock([4, 1, 1], (curState) => curState.with("active", true), false);

    scene.world.setBlock([4, 3, 1], 'mekanism:sps_port', false);
    scene.world.setBlock([4, 3, 2], 'mekanism:supercharged_coil', false);
    scene.text(60, 'Here, there is only 1 Supercharged Coil, but if you have a Fusion Reactor (recommended), you should put 5. This will increase the speed dramatically.');
    scene.idle(65);
    scene.text(60, 'To start producting Antimatter, just put in power to the coils, put in Polonium and wait for the big arc in the middle to appear.');
}

  const entries = [
    'mekanism:sps_casing',
    'mekanism:sps_port',
    'mekanism:supercharged_coil'
  ];

  for (const id of entries) {
    event.create(id)
      .scene(
        "mekanism-supercritical-phase-shifter-1",
        "Supercritical Phase Shifter",
        "kubejs:ponder_schem_sps_1",
        createSuperCriticalPhaseShifterScene1
      );
  }
});
