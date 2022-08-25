export class Proyectos {

    id_Proyecto?: number;
    titulo: string;
    descripcion: string;
    imagen: string;

    constructor(titulo: string, descripcion: string, imagen: string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
