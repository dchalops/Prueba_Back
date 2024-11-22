import { NextFunction, Request, Response } from 'express';

import ActiveSession from '../models/activeSession';
import { connection } from '../server/database';

// eslint-disable-next-line import/prefer-default-export
export const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extrae el token del encabezado

    if (!token) {
      return res.status(401).json({ success: false, msg: 'No token provided' });
    }

    const activeSessionRepository = connection!.getRepository(ActiveSession);

    // Busca la sesión activa por el token
    const session = await activeSessionRepository.findOne({ where: { token } });

    console.log('Token recibido:', token);
    console.log('Sesión encontrada:', session);

    if (session) {
      return next(); // Si la sesión es válida, pasa al siguiente middleware
    }

    return res.status(401).json({ success: false, msg: 'User is not logged on' });
  } catch (error) {
    console.error('Error en checkToken:', error);
    return res.status(500).json({ success: false, msg: 'Error interno del servidor' });
  }
};
