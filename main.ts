namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f 8 f f f f f f f f 
f f f f f f 8 8 8 8 f f f f f f 
f f f f f 8 8 c c c 8 8 f f f f 
f f f f 8 8 c f f c c 8 f f f f 
f f f f 8 c f f f f c 8 8 f f f 
f f f 8 c c f f f f c c 8 f f f 
f f f 8 c f f f f f c c 8 f f f 
f f f 8 c f f f f f f c 8 f f f 
f f f 8 c f f f f f f c 8 f f f 
f f f 8 c f f f f f c 8 8 f f f 
f f f 8 8 c f f f f c 8 f f f f 
f f f f 8 c c f f c 8 8 f f f f 
f f f f 8 8 c c c c 8 f f f f f 
f f f f f 8 8 c c 8 8 f f f f f 
f f f f f f 8 8 8 8 f f f f f f 
f f f f f f f 8 8 f f f f f f f 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest0, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    princess.say("MY HERO! :D")
    princess.follow(hero)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
let princess: Sprite = null
let hero: Sprite = null
hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
hero.setPosition(25, 295)
controller.moveSprite(hero)
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(
            hex`140014000808080808080808080808080808080808080808080000000000000000000a000000000000000008080000000000000000000a0000000000000e0008080000000000000000000a000000000000000008080000000000000000000a000000000000000008080000000000000000000a000000000a0a0a0a0808000000000a000000000a000000000a0000000808000000000a000000000a000000000a0000000808000000000a000000000a000000000a0000000808000000000a00000a0a0a0a0a00000a0000000808000000000a0000000000000000000a0000000808000000000a0000000000000000000a0000000808000000000a0000000000000000000a0000000808000000000a000000000000000000000000000808000000000a000000000000000000000000000808000000000a000000000000000000000000000808000000000a000000000000000000000000000808000000000a000000000000000000000000000808000000000a00000000000000000000000000080808080808080808080808080808080808080808`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles11,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles9,sprites.builtin.forestTiles7,sprites.dungeon.floorLight2,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.chestClosed,sprites.dungeon.hazardHole,sprites.builtin.forestTiles14,myTiles.tile1],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(hero)
let bat = sprites.create(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
bat.setPosition(50, 100)
let saw = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 6 f f f f f f f f f 6 . . . . . . . . . . 
. . . . . . . 6 6 6 6 f f f f f f f 6 6 6 6 . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 f f f f f 6 6 6 6 6 6 6 . . . . . . 
. . . . 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 . . . . . 
. . . 6 6 6 6 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 6 6 6 6 . . . . 
. . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 . . . 
. . 6 6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 6 . . . 
. 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 . . 
. 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 . . 
6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 . 
f 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 f . 
f f 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 f f . 
f f f 6 6 6 6 6 6 6 6 6 2 6 6 6 2 6 6 6 6 6 6 6 6 6 f f f . 
f f f f 6 6 6 6 6 6 6 6 6 2 6 2 6 6 6 6 6 6 6 6 6 f f f f . 
f f f f f 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 f f f f f . 
f f f f 6 6 6 6 6 6 6 6 6 2 6 2 6 6 6 6 6 6 6 6 6 f f f f . 
f f f 6 6 6 6 6 6 6 6 6 2 6 6 6 2 6 6 6 6 6 6 6 6 6 f f f . 
f f 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 f f . 
f 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 f . 
6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 . 
. 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 6 . . 
. 6 6 6 6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 6 6 6 . . 
. . 6 6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 6 . . . 
. . 6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 2 6 6 6 . . . 
. . . 6 6 6 6 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 6 6 6 6 . . . . 
. . . . 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 . . . . . 
. . . . . 6 6 6 6 6 6 6 f f f f f 6 6 6 6 6 6 6 . . . . . . 
. . . . . . . 6 6 6 6 f f f f f f f 6 6 6 6 . . . . . . . . 
. . . . . . . . . 6 f f f f f f f f f 6 . . . . . . . . . . 
`, SpriteKind.Enemy)
saw.setPosition(150, 220)
princess = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Projectile)
princess.setPosition(280, 110)
let portal = sprites.create(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f 
f f f f f f f f f f f 8 8 8 8 8 8 8 8 f f f f f f f f f f f 
f f f f f f f f f f f 8 c c c c c c 8 8 8 f f f f f f f f f 
f f f f f f f f f f 8 c c f f c c c c 8 8 8 8 f f f f f f f 
f f f f f f f f f f 8 c f f f f f c c c 8 8 8 f f f f f f f 
f f f f f f f f f 8 8 c f f f f f f f c c 8 8 f f f f f f f 
f f f f f f f f f 8 c f f f f f f f f f c c 8 8 f f f f f f 
f f f f f f f f 8 8 c f f f f f f f f f f c c 8 8 f f f f f 
f f f f f f f 8 8 c c f f f f f f f f f f c c 8 8 f f f f f 
f f f f f f f 8 8 c f f f f f f f f f f f c c 8 8 f f f f f 
f f f f f f 8 8 c c f f f f f f f f f f f c c 8 8 f f f f f 
f f f f f f 8 8 c f f f f f f f f f f f f c c 8 8 f f f f f 
f f f f f 8 8 8 c f f f f f f f f f f f f c c 8 8 f f f f f 
f f f f f 8 8 8 c f f f f f f f f f f f f c c 8 f f f f f f 
f f f f f f 8 8 c f f f f f f f f f f f f c 8 8 f f f f f f 
f f f f f f 8 8 c f f f f f f f f f f f f c 8 8 f f f f f f 
f f f f f f 8 8 c f f f f f f f f f f f c c 8 8 f f f f f f 
f f f f f f 8 8 c f f f f f f f f f f f c 8 8 8 f f f f f f 
f f f f f f 8 8 c f f f f f f f f f f f c 8 8 f f f f f f f 
f f f f f f f 8 c f f f f f f f f f f c c 8 8 f f f f f f f 
f f f f f f f 8 8 c f f f f f f f f f c 8 8 f f f f f f f f 
f f f f f f f 8 8 c c f f f f f f f c c 8 8 f f f f f f f f 
f f f f f f f f 8 8 c c f f f f f f c 8 8 f f f f f f f f f 
f f f f f f f f f 8 8 c c f f f f c 8 8 8 f f f f f f f f f 
f f f f f f f f f f 8 8 8 c c c c 8 8 f f f f f f f f f f f 
f f f f f f f f f f f 8 8 8 8 8 8 8 8 f f f f f f f f f f f 
f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)
portal.setPosition(280, 50)
forever(function () {
    saw.startEffect(effects.halo, 1000)
})
