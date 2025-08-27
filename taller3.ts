interface estudiantes{
    nombre:string;
    edad:number;
    curso:string;
    direccion: Direccion; 
    mostrarInfo:()=>string;
}
interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}
const estudiante:estudiantes = {
        nombre: 'Juan',
        edad: 22,
        curso: 'Matemáticas',
        direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
        },
        mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en
        ${this.direccion.ciudad}`;
        }
    };
console.log(estudiante.mostrarInfo());
interface productos{
    id:number;
    nombre:string;
    precio:number;
    stock: number; 
    mostrarDetalle:()=>string;
}

const producto:productos = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
    return `${this.nombre} cuesta $${this.precio} y hay ${this.stock}
    unidades disponibles`;
    }
    };
console.log(producto.mostrarDetalle());
interface Peliculas {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir: () => string;
}
const pelicula:Peliculas = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por
    ${this.director}`;
    }
    };
interface Usuarios {
  username: string;
  password: string;
  roles: string[];
  login: () => string;
}
console.log(pelicula.reproducir());
const usuario:Usuarios = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
    return `Usuario ${this.username} ha iniciado sesión con roles:
    ${this.roles.join(', ')}`;
    }
    };
console.log(usuario.login());



// 'true' no es un tipo válido en una unión (usar 'boolean' en su lugar)
let myValue: number | string | boolean = 10;

// mejor usar 'boolean' (tipo primitivo) en vez de 'Boolean' (objeto)
let myBoolean: boolean = true;

// : "150" es un string, no un número
let healthPoints: number = 150;

// : "otraEtiqueta" no estaba dentro de los tipos permitidos
let otherMultipleDataType: number | boolean | "myTag" | "otraEtiqueta" = "otraEtiqueta";

//  myVar tiene tipo implícito 'any' y puede cambiar
let myVar;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};

// : las constantes deben ser inicializadas al declararse
const myConstant: number = 42;

// :  fue declarado como string y luego se intentó asignar un número
let inferedDataType: string | number = "Texto inicial";
inferedDataType = 123;

// : '1' no es booleano. Se cambió a 'true'
const isActive: boolean = true;

// : `true` no es válido en una variable que espera number o string
let mixed: number | string = "true";

// : 'while' es una palabra reservada TypeScript
let whileVar: string = "Hola";

// : 'numer' no es un tipo válido, debe ser 'number'
let myNumber: number = 10;

// : arreglo de números no puede contener un string "3"
let numeros: (number | string)[] = [1, 2, 3]; // O cambiar tipo a aceptar strings si se quiere incluir "3"

// : la tupla esperaba 2 elementos [string, number], pero solo tenía 1
let tupla: [string, number] = ["Hola", 1];

// : tipos invertidos y valores incorrectos
let otraTupla: [string, boolean] = ["Hola", true];

// : asignar 'null' a variable tipo string no es válido sin unión
let texto: string | null = "Hola mundo";
texto = null;

// : "amarillo" no es parte del tipo literal
let color: "rojo" | "verde" | "azul" = "rojo";

let valor: any = 10;
valor.toUpperCase(); // Error en tiempo de ejecución si 'valor' no es string
//  'onst' a 'const' esta mal escrito
const version: number = 1.0;
// No se puede reasignar una constante. 

//  se debe definir el tipo completo si planeas agregar más propiedades
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz"; 

// 'undefined' no es un número. 
let edad: number | undefined = undefined; 



