class Coche {
  constructor(marca, modelo, potencia, cilindrada, color) {
    this._marca = marca;
    this._modelo = modelo;
    this._potencia = potencia;
    this._cilindrada = cilindrada;
    this._color = color;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get marca() {
    this._marca = marca;
  }

  get modelo() {
    this._modelo = modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }

  set potencia(potencia) {
    this._potencia = potencia;
  }

  get potencia() {
    this._potencia = potencia;
  }

  set cilindrada(cilindrada) {
    this._cilindrada = cilindrada;
  }

  get cilindrada() {
    this._cilindrada = cilindrada;
  }

  get color() {
    this._color = this.color;
  }

  set color(color) {
    this._color = this.color;
  }
}

arrancar() {
  console.log("Estoy arrancando");
}

acelerar() {
  console.log("Estoy acelerando");
}

frenar() {
  console.log("Estoy frenando");
}

girar() {
  console.log("Estoy girando");
}

toString() {
  return "Coche [marca=" + this.marca +", modelo=" + this.modelo + ", potencia=" + this.potencia + ", cilindrada=" +this.cilindrada + ", color="+ this.color +"]";
}