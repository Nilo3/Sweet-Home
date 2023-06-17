//importar dot env
import { config } from 'dotenv';
config();
//traer TOKEN_ADMIN
const { TOKEN_ADMIN } = process.env;

const adminMiddleware = async (req, res, next) => {

    const adminToken = req.headers.admintoken;

    console.log(req.headers);
    if (!adminToken) {
        return res.status(401).json({ error: 'Falta token de autenticación', receivedToken: null, expectedToken: null });
    }

    if (adminToken !== TOKEN_ADMIN) {
        return res.status(401).json({ error: 'Token inválido' });
    }

    if (!isAdmin) {
        return res.status(401).json({ error: 'No tienes permisos de administrador' });
      }

    next();

};

export default adminMiddleware;