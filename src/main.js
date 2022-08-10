import Phaser from './lib/phaser.js'

/* importando as cenas */
import Game from './scenes/Game.js'
import Start from './scenes/Start.js'
import Pause from './scenes/Pause.js'
import Info from './scenes/Info.js'
import GameOver from './scenes/GameOver.js'

new Phaser.Game({
    type: Phaser.AUTO,
    width: 650,
    height: 950,
    scene: [Game, Start, Info,  Pause, GameOver],
    physics: {
        //default: 'arcade',
        default: 'matter',
        arcade: {
            gravity: {
                y: 1000
            },
            debug: false
        }
    }
})