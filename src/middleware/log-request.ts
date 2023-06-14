import { NextFunction, Request, Response } from "express";

export default function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log("Request been accepted: ", req);
    next();
}
