import express from 'express';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import auth from './middlewares/auth.js';

const server = express();
server.use(express.json());

server.use('/musicas', publicRoutes);  
server.use('/musicas', auth, privateRoutes); 

server.listen(3000, () => console.log('Servidor OK'));
