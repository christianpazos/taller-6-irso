import app from './app'
import './database'


//app.listen(4000);

//console.log('Servidor en puerto' ,4000)

//server.listen(4000, () => console.log('El servidor esta funcionando'));

const http = require('http');
const server = http.createServer(app);
const puerto = app.set('port',process.env.PORT || 4000);

//Server.listen(app.get('port'),() => {
//   console.log(`server on port ${app.get('port')}`);
//} );


server.listen(app.get(puerto), () => 
     console.log('El servidor esta funcionando'));
