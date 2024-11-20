import express from 'express';
import { PrismaClient } from '@prisma/client';
const router = express.Router();
const prisma = new PrismaClient();

router.get('/lista', async (req, res) => {
  try {
    const musicas = await prisma.musica.findMany({});
    res.status(200).json({ message: 'Músicas listadas com sucesso', musicas });
  } catch (err) {
    res.status(500).json({ message: 'Falha ao listar músicas' });
  }
});

router.post('/add-music', async (req, res) => {
  try {
    const { name, artist, grade } = req.body; // Certificando-se de que está pegando os dados corretos
    const musica = await prisma.musica.create({
      data: { name, artist, grade }
    });
    res.status(201).json({ message: 'Música adicionada com sucesso', musica });
  } catch (err) {
    res.status(500).json({ message: 'Falha ao adicionar música' });
  }
});

export default router;
