class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    console.log(`Nombre completo:  ${this.nombre} ${this.apellido}`);
  }
  addMascotas = (masc) => {
    this.mascotas.push(masc);
  };
  countMascotas() {
    console.log(this.mascotas.length);
  }
  addBook = (lib) => {
    this.libros.push(lib);
  };
  getBookNames() {
    this.libros.forEach((element) => {
      console.log(`${element.nombre}`);
    });
    const newarray = this.libros.map((el) => el.nombre);
    return console.log(newarray);
  }
}

const usuario = new Usuario(
  "Daniela",
  "Aveces",
  [
    { nombre: "Baila, Baila, Baila", autor: "Haruki Murakami" },
    { nombre: "Los hijos del Vidriero", autor: "Maria Gripe" },
    { nombre: "Casi el paraíso", autor: "Luis Spota" },
    { nombre: "El Diablo", autor: "Leon Tolstoi" },
  ],
  ["perro", "gato", "hamster", "gecko"]
);

console.log(usuario);
usuario.getFullName();

usuario.addMascotas("loro");
console.log(usuario);

usuario.countMascotas();

usuario.addBook({ nombre: "El Lobo estepario", autor: "Herman Hessen" });
console.log(usuario);

usuario.getBookNames();
