import jwt from 'jsonwebtoken';

import { config } from 'dotenv';
config();

const { JWT_SECRET } = process.env;

const secret = JWT_SECRET;

export const generateToken = (payload) => {
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secret, options);
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secret, { ignoreExpiration: false });
        const { id } = decoded;
        return { id };
    } catch (err) {
        return null;
    }
};