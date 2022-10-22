export class MenuButton{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.image('menubutton', './assets/imagenes/otras/levitacion.png');
	}

	create(){
		this.menuButton = this.relatedScene.add.sprite(400, 230, 'menubutton').setInteractive();
		this.menuButton.on('pointerdown',() => {
			this.relatedScene.scene.start('menu');
		});
	}

}