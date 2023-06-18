import { config } from 'dotenv';
config();
const { TOKEN_ADMIN } = process.env;

const adminMiddleware = async (req, res, next) => {

    const adminToken = req.headers.admintoken;

    console.log(req.headers);
    if (!adminToken) {
        return res.status(401).json({ error: 'Missing authentication token', receivedToken: null, expectedToken: null });
    }

    if (adminToken !== TOKEN_ADMIN) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    if (!isAdmin) {
        return res.status(401).json({ error: 'You do not have administrator permissions' });
    }

    next();

};

export default adminMiddleware;