// console.log( 'Código de typescript' );

import Server from "./server/server";
import router from './router/router';
import MySQL from "./mysql/mysql";



const server = Server.init( 5500 );

server.app.use( router );

MySQL.instance;

server.start( () =>
{
    console.log( 'Servidor corriendo en el puerto', + server.port );
} );