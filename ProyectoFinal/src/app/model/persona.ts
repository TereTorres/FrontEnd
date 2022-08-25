export class Persona {

    id_Persona?: number;
    nombre: string;
    img: string;
    acerca_de: string;

    constructor(nombre: string, img: string, acerca_de: string){

        this.nombre = nombre;
        this.img = img;
        this.acerca_de = acerca_de;
    }
}
