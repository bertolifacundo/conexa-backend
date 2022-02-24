# Conexa Backend

_Proyecto backend: Login el cual debe consumir un servicio de login que debe ser creado en el proyecto  de Back.
Listar [post], el cual debe consumir a la API : https://jsonplaceholder.typicode.com/posts y mostrarlo en una lista o tabla.
Listar [photos], el cual debe consumir a la API : https://jsonplaceholder.typicode.com/photos, esta lista debe tener paginación de 10 en 10, haciendo uso de limit and offset.
Para dirigirse a la documentacion de la API y al repositorio mismo , ingrese aca: https://backend-conexa.herokuapp.com/_

## Comenzando 🚀

_Instrucciones para descarga del proyecto e instalacion de las dependencias_


### Pre-requisitos 📋

_Que necesitamos:_

1. Nodejs v14.15.5: https://nodejs.org/download/release/v14.15.5/
2. Descarga del proyecto desde github: https://github.com/bertolifacundo/conexa-backend/archive/refs/heads/main.zip


### Instalación 🔧

1. Entrar en https://nodejs.org/download/release/v14.15.5/ y descargar el instalador de Node.js en el sistema operativo deseado. Podemos elegir entre Windows, Mac y Linux.



2. Ejecutar el instalador que acabamos de descargar. Simplemente debemos avanzar en el proceso de instalación.



3. Una vez finalizado el proceso de instalación, podemos comprobar fácilmente si se nos ha instalado correctamente. Para ello, vamos al intérprete de comandos de nuestro ordenador (en Windows, por ejemplo, escribir “cmd” en la barra de búsqueda y abrir la aplicación de “Símbolo del sistema”).





4. En la ventana de comandos, escribir node -v y pulsar la tecla Enter. Nos debería aparecer la versión que tenemos instalada de Node.js. Para comprobar que se nos ha instalado también NPM, escribiremos npm -v y pulsaremos de nuevo Enter. Nos debería aparecer también en este caso la versión del Node Package Manager.


## Instalacion de dependencias 📦

_Una vez descargado node e instalado y con el proyecto descargado ir al directorio en el que se encuentra descomprimir la carpeta y abrir el mismo con el editor de codigo que tengamos._

Abrir una consola de cmd , dirigirnos a la raiz del proyecto y escribir:
```
npm install
```
_esperar que se instalen las dependencias_
_..._
_Luego:_
```
nodemon app
```
_por último ir al navegador, colocar la url y dar enter_

```
http://localhost:8081/
```

## Construido con 🛠️

_Dependencias utilizadas_
   * "axios": "^0.26.0",
   * "bcryptjs": "^2.4.3",
   * "cors": "^2.8.5",
   * "dotenv": "^16.0.0",
   * "express": "^4.17.3",
   * "express-validator": "^6.14.0",
   * "jsonwebtoken": "^8.5.1",
   * "mongoose": "^6.2.3",
   * "nodemon": "^2.0.15",
   * "paginate-array": "^2.1.0",
   * "swagger-jsdoc": "^6.1.0",
   * "swagger-ui-express": "^4.3.0",
   * "winston": "^3.6.0",
   * "winston-daily-rotate-file": "^4.6.1"

## Autores ✒️

* **Facundo A. Bértoli** - *Trabajo Inicial* - [bertolifacundo](https://github.com/bertolifacundo)
* **Facundo A. Bértoli** - *Documentación* - [bertolifacundo](https://github.com/bertolifacundo)
