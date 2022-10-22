import ShopButton from '../components/ShopButton.js';
import StartButton from '../components/StartButton.js';

export default class Menu extends Phaser.Scene {
	constructor() {
		super({ key: 'menu' });
		this.ShopButton = new ShopButton(this); 
		this.StartButton = new StartButton(this);
	}
	 // preload de la imagen del menu
	 preload() {
	 	this.load.image('menu', './assets/imagenes/otras/nodos.png');
	 	this.ShopButton.preload();
	 	this.StartButton.preload();
	 }
	 // creación del botón
	 create() {
	 	this.add.image(0, 0, 'tierra').setOrigin(0, 0);
	 	this.ShopButton.create();
	 	this.StartButton.create();
	 }
}
	