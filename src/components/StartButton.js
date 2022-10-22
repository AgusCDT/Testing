export default class StartButton{
	
	constructor(scene){
		this.relatedScene = scene;
	}

	preload() {
		this.relatedScene.load.image('startbutton', './assets/imagenes/gaviota.png');
	}

	create(){
		this.startButton = this.relatedScene.add.image(400, 140, 'startbutton').setInteractive();
		this.startButton.on('pointerdown',() => {
			this.relatedScene.scene.start('tierra');
		});
	}
}