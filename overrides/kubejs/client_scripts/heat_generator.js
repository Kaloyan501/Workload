// for 1.18 pls use: onEvent("ponder.registry", event => { ... })
Ponder.registry((event) => {
    /**
     * Create a new ponder entry with one scene for "minecraft:paper".
     */
    event.create("mekanismgenerators:heat_generator").scene("ponder_heat_generator", "How to use a Heat Generator", (scene, util) => {
        scene.showStructure();

        scene.world.setBlock([2, 2, 2], "mekanismgenerators:heat_generator", false);
        scene.idle(10);
        scene
            .text(60, "The Heat Generator generates electricity from the world's heat. This may not be enough for some applications.", [2.0, 2.5, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.WHITE)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget()
            /**
             * Optional | Adds a keyframe to the scene.
             */
            .attachKeyFrame();
        scene.idle(65);
        scene.world.setBlock([2, 1, 2], "minecraft:lava", false);
        scene
            .text(60, "This process can be sped up by adding lava below the heat generator.", [2.0, 1.5, 2.5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
            
    });
});