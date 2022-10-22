export default class ShopButton{

	constructor(scene){
		this.relatedScene = scene;
	}

	preload(){
		this.relatedScene.load.image('shopbutton', './assets/imagenes/otras/anadir');
	}

	create(){
		this.shopButton = this.relatedScene.add.image(400, 230, 'shopbutton').setInteractive();
		this.shopButton.on('pointerdown',() => {
			this.relatedScene.scene.start('shop');
		});
	}
}