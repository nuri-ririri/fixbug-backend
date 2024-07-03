import { Request, Response } from 'express';

const links: string[] = [];

export const createLink = (req: Request, res: Response): void => {
    const { url } = req.body;
    links.push(url);
    console.log('Links:', links); // Simulate storage by logging
    res.status(201).json({ message: 'Link received', url });
};
