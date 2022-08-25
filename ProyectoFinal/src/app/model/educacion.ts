export class Educacion {

    id_Educacion?: number;
    nivel: string;
    institucion: string;
    titulo: string;

    constructor(nivel: string, institucion: string, titulo: string){
        this.nivel = nivel;
        this.institucion = institucion;
        this.titulo = titulo;

    }
}
