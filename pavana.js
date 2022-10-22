import entities from './entities.js';

export default class pavana extends entities {
	constructor(scene, x, y) {
		super(scene, x, y, 200, 'pavana'); //llamamos al constructor de Enemy con velocidad 200 e imagen 'goblin'
		this.setDisplaySize(50,50); // asignamos el tamaño con el que queremos que se vea su imagen
	}
	
}