private energia: number;

  constructor() {
    this.energia = 100; // começa descansado
  }

  public brincar(): void {
    if (this.energia > 0) {
      this.energia -= 20;
      console.log("O gato brincou e ficou mais cansado.");
    } else {
      console.log("O gato está sem energia. Ele precisa dormir!");
    }
  }

  public dormir(): void {
    this.energia = 100;
    console.log("O gato dormiu e recuperou a energia!");
  }

  public mostrarEnergia(): void {
    console.log(`Energia atual do gato: ${this.energia}`);
  }
}

const gato = new Gato();
gato.brincar();          // O gato brincou e ficou mais cansado.
gato.mostrarEnergia();   // Energia atual do gato: 80
gato.dormir();           // O gato dormiu e recuperou a energia!
