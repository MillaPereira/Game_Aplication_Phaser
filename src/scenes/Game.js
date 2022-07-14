import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene {

    constructor() {
        super('game');
    }

    init(){};

    preload() {

        this.load.image('background', 'src/sprites/images/Background1.png');
        this.load.image('pause', './src/sprites/images/Pause.png');
        this.load.image('plataform', './src/sprites/images/grass.png');

        // ======= Peças de madeira =======
        this.load.image('timber_1x1', './src/sprites/images/Formats/1x1_destroy.png');
        this.load.image('timber_1x2', './src/sprites/images/Formats/1x2_destroy.png');
        this.load.image('timber_1x3', './src/sprites/images/Formats/1x3_destroy.png');
        this.load.image('timber_1x4', './src/sprites/images/Formats/1x4_destroy.png');
        this.load.image('timber_2x1', './src/sprites/images/Formats/2x1_destroy.png');
        this.load.image('timber_3x1', './src/sprites/images/Formats/3x1_destroy.png');
        this.load.image('timber_4x1', './src/sprites/images/Formats/4x1_destroy.png');

        // ======= Peças de pedra =======
        this.load.image('rock_1x1', './src/sprites/images/Formats/1x1_solid.png');
        this.load.image('rock_1x2', './src/sprites/images/Formats/1x2_solid.png');
        this.load.image('rock_1x3', './src/sprites/images/Formats/1x3_solid.png');
        this.load.image('rock_3x1', './src/sprites/images/Formats/2x1_solid.png');
        this.load.image('rock_4x1', './src/sprites/images/Formats/3x1_solid.png');

    }

    create() {
        var mouseOver = false;

        const {width, height} = this.scale; 

        this.add.image(width/2, height/2 - 100, 'background').setScale(1.10);

        // ======= Adicionando plataforma =======
        const plataform = this.physics.add.staticImage(width/2, height, 'plataform');
        plataform.setImmovable(true);

        // ======= Botão de Pausa =======
        const pauseButtom = this.add.image(30,30, 'pause').setScale(0.2).setInteractive();
        pauseButtom.on('pointerover', () => {
            pauseButtom.setScale(0.225);
            pauseButtom.setTint(0x00FF00)
            mouseOver = true;
        });
        pauseButtom.on('pointerout', () => {
            pauseButtom.setScale(0.2);
            pauseButtom.setTint(0xffffff);
            mouseOver = false;
        });
        pauseButtom.on('pointerdown', () => {
            this.scene.launch('pause');
            this.scene.pause();
        });

        // ======= Criando os blocos =======
        const blocoM1 = this.physics.add.image(width/2, height/2, 'timber_1x2');

        const blocoR1 = this.physics.add.image(width/2 + 40, height/2 - 200, 'rock_3x1');

        // ======= Adicionando colisão entre os objetos =======
        this.physics.add.collider(blocoM1, plataform);
        this.physics.add.collider(blocoR1, plataform);
        this.physics.add.collider(blocoR1, blocoM1);

        // this.game.physics.startSystem(Phaser.Physics.P2JS);
		// this.game.physics.p2.setImpactEvents(true);
    }


    update(){

    };
}