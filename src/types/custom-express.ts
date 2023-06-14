import { Request } from "express";

export interface ExpressRequest<T = any> extends Request {
    rawBody: Buffer;
    body: T;
}