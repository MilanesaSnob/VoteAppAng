export class Enlace {
    titulo: string;
    enlace: string;
    votos: number;

    // creamos el constructor encargado de tomar los datos y asignarlo a los propiedades que acabamos de declarar
    constructor(titulo: string, enlace: string, votos?: number) {
        this.titulo = titulo;
        this.enlace = enlace;
        this.votos = votos || 0; //votos no asigna parametros sino que recibe por eso el votos? en la declaracion
    }

    //Ahora creamos los metodos para subir y bajar votos
    voteUp() {
        this.votos++;
        //this.votos = this.votos + 1; es lo mismo que el anterior pero mas largo
    }
    voteDown(){
        this.votos--;
    }
}