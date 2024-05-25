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

    encender(){
        console.log("el vehiculo se esta encendiendo");
    }

    apagar(){
        console.log("el vehiculo se esta apagando");
    }

    mostrarDatos(){
        console.log("El modelo es: " + this.#modelo);
        console.log("El año es: " + this.#año);
        console.log("El color es: " + this.#color);
        console.log("El peso es: " + this.#peso);
    }




}

class Motocicleta extends Vehiculo{
    #cilindrada;
    #marca;

    constructor (modelo, año, color, peso, cilindrada,marca){
        super (modelo, año, color, peso);
        this.#cilindrada = cilindrada;
        this.#marca = marca;
    }

    
    setMarca(marca){
        this.#marca = marca;
    }
    getMarca(){
        return this.#marca;
    }

    setCilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }
    getCilindrada(){
        return this.#cilindrada;
    }
    mostrarDatos(){
        super.mostrarDatos();
        console.log("la marca es: " + this.#marca);
        console.log("el cilindrado es: " + this.#cilindrada);
    }

}

const v1 = new Vehiculo();
v1.encender();

const moto1 = new Motocicleta("ford k", 1998, "rojo", 600, "500cc", "Ford")
console.log("Descripcion del vehiculo: ");
moto1.mostrarDatos();

v1.apagar();

