class Vehiculo{
    #modelo;
    #año;
    #color;
    #peso;
    constructor(modelo, año, color, peso){
        this.#modelo = modelo;
        this.#año = año;
        this.#color = color;
        this.#peso = peso;
    }

    setModelo(modelo){
        this.#modelo = modelo;
    }
    getModelo(){
        return this.#modelo;
    }

    setAño(año){
        this.#año = año;
    }
    getAño(){
        return this.#año;
    }

    setColor(color){
        this.#color = color;
    }
    getColor(){
        return this.#color;
    }

    setPeso(peso){
        this.#peso = peso;
    }
    getPeso(){
        return this.#peso;
    }



}

class Motocicleta extends Vehiculo{

}