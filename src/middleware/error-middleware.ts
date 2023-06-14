import { NextFunction, Request, Response } from "express";

export default function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  if (!error) {
    return;
  }
  if (res.headersSent) {
    console.error(error);
    return;
  }
  console.error(error);
  res.status(500).send({ message: error.message });
  return;
}
