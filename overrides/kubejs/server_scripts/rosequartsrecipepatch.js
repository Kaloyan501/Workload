ServerEvents.recipes(event => {
  event.shapeless('create:rose_quartz', [
    'biomesoplenty:rose_quartz_chunk'
  ])
})

event.shapeless(
  Item.of('create:rose_quartz', 1), // arg 1: output
  [
    'biomesoplenty:rose_quartz_chunk'
  ]
)
