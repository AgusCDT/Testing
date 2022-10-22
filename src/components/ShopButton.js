export class ShopButton{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.spritesheet('shopbutton', './assets/imagenes/otras/anadir');
	}

	create(){
		this.shopButton = this.relatedScene.add.sprite(400, 230, 'shopbutton').setInteractive();
		this.startButton.on('pointerdown',() => {
			this.relatedScene.scene.start('shop');
		});
	}
}