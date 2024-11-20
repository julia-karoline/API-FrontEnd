import express from 'express';
import { PrismaClient } from '@prisma/client';
const router = express.Router();
const prisma = new PrismaClient();

router.put('/atualizar-musica/:id', async (req, res) => {
  try {
    await prisma.musica.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json({ message: 'Música atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Falha na atualização da música' });
  }
});

router.delete('/deletar-musica/:id', async (req, res) => {
  try {
    await prisma.musica.delete({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Música deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Falha ao deletar música' });
  }
});

export default router;
