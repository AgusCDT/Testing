/*Escena del juego. Aquí debería importarse el script de la pavana*/
import pavana from './pavana.js';

export default class Tierra extends Phaser.Scene {
	constructor() {
		super({ key: 'tierra' });		
	}
	 // preload de la imagen de fondo
	 preload() {
	 	this.load.image('tierra', './assets/imagenes/otras/TRIOLIC.png');
	 	this.load.image('pavana', './assets/imagenes/gaviota.png');
	 }
	 
	 create() {
	 	this.add.image(0, 0, 'tierra').setOrigin(0, 0);
	 	
	 	let pavana = new pavana(this, 20, 20);
	 	
	 }
}